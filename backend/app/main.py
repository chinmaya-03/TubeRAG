import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.youtube import router as youtube_router
from app.routes.chat import router as chat_router

app = FastAPI()

# Configure CORS origins from environment variable with localhost fallback
allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(youtube_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {"message": "TubeRAG Backend is Running 🚀"}


@app.get("/health")
def health():
    return {"status": "healthy"}