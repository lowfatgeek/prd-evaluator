from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.services.db_service import init_db

# Initialize database tables
init_db()

app = FastAPI(title="PRD Evaluator API", version="1.0.0")

def parse_cors_origins(origins):
    if isinstance(origins, str):
        # Allow fallback to comma-separated if not parsed properly by pydantic
        return [o.strip() for o in origins.replace("[", "").replace("]", "").replace('"', "").replace("'", "").split(",")]
    return origins

parsed_origins = parse_cors_origins(settings.CORS_ORIGINS)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if "*" in parsed_origins else parsed_origins,
    allow_credentials=False, # Must be False if we want to allow "*"
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "PRD Evaluator Backend API is running."}

# Import routers
from app.api.v1.endpoints import upload, evaluate, results, export

app.include_router(upload.router, prefix="/api/v1")
app.include_router(evaluate.router, prefix="/api/v1")
app.include_router(results.router, prefix="/api/v1")
app.include_router(export.router, prefix="/api/v1")
