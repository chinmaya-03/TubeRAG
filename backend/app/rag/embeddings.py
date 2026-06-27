import os
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings

load_dotenv()

# Global variable
_embeddings = None


def get_embeddings():
    global _embeddings

    if _embeddings is None:
        print("Initializing Google Gemini Embeddings (text-embedding-004)...")

        _embeddings = GoogleGenerativeAIEmbeddings(
            model="models/text-embedding-004",
            google_api_key=os.getenv("GEMINI_API_KEY"),
        )

    return _embeddings