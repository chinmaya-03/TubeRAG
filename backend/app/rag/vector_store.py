import os

from langchain_community.vectorstores import FAISS

from app.rag.embeddings import get_embeddings


BASE_DB_PATH = "vector_db"


def create_vector_store(chunks, video_id):

    embeddings = get_embeddings()

    # Create folder for this specific video
    db_path = os.path.join(BASE_DB_PATH, video_id)

    # Check if this video's FAISS index exists
    if os.path.exists(os.path.join(db_path, "index.faiss")):

        print(f"Loading FAISS index for video: {video_id}")

        vector_store = FAISS.load_local(
            db_path,
            embeddings,
            allow_dangerous_deserialization=True,
        )

    else:

        print(f"Creating FAISS index for video: {video_id}")

        vector_store = FAISS.from_texts(
            texts=chunks,
            embedding=embeddings,
        )

        # Create directory if it doesn't exist
        os.makedirs(db_path, exist_ok=True)

        vector_store.save_local(db_path)

        print("FAISS index saved successfully!")

    return vector_store