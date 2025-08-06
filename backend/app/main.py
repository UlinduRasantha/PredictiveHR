from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, prediction
import os

Base.metadata.create_all(bind=engine)

# Initialize the FastAPI app
app = FastAPI(
    title="PredictiveHR API",
    description="API for handling user authentication and HR predictions.",
    version="1.0.0"
)

origins = [
    "http://localhost:5173", 
    "http://localhost:3000", 
   
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# --- Routers ---
app.include_router(auth.router, prefix="/api", tags=["Authentication"])
app.include_router(prediction.router, prefix="/api", tags=["Prediction"])

# --- Root Endpoint ---
@app.get("/api", tags=["Root"])
async def read_root():
    return {"message": "Welcome to the PredictiveHR API!"}