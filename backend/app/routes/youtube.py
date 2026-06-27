from fastapi import APIRouter
from pydantic import BaseModel

from app.utils import store

from app.services.youtube_service import get_transcript
from app.rag.splitter import split_text
from app.rag.vector_store import create_vector_store
from app.rag.retriever import get_retriever
from app.rag.chain import get_rag_chain

router = APIRouter()


class YouTubeRequest(BaseModel):
    url: str


@router.post("/analyze")
def analyze_video(request: YouTubeRequest):

    # Step 1: Get transcript and video ID
    transcript, video_id = get_transcript(request.url)

    # Step 2: Split transcript
    chunks = split_text(transcript)

    print("Video ID:", video_id)
    print("Number of chunks:", len(chunks))

    # Step 3: Create / Load vector store
    vector_store = create_vector_store(chunks, video_id)

    print("Vector Store Ready!")

    # Step 4: Create retriever
    retriever = get_retriever(vector_store)

    # Step 5: Create RAG chain
    rag_chain = get_rag_chain(retriever)

    # Step 6: Save globally
    store.rag_chain = rag_chain

    return {
        "message": "Video analyzed successfully",
        "chunks": len(chunks),
    }