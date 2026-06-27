from fastapi import APIRouter
from pydantic import BaseModel

from app.utils import store

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
def chat(request: ChatRequest):

    if store.rag_chain is None:
        return {
            "error": "Please analyze a video first."
        }

    answer = store.rag_chain(request.question)

    return {
        "answer": answer
    }