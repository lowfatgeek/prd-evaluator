from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List

class Settings(BaseSettings):
    ENVIRONMENT: str = "development"
    CORS_ORIGINS: List[str] = ["*"]
    
    DB_PROTOCOL: str = "sqlite"
    DATABASE_URL: str = "sqlite:///./prd_evaluator.db"
    
    OPENROUTER_API_KEY: str = ""
    OPENROUTER_MODEL: str = "anthropic/claude-3.5-sonnet"
    OPENROUTER_FALLBACK_MODEL_1: str = ""
    OPENROUTER_FALLBACK_MODEL_2: str = ""
    
    # Supabase credentials if needed for storage
    SUPABASE_URL: str = ""
    SUPABASE_KEY: str = ""
    
    # Cron Security
    CRON_SECRET_KEY: str = "default_secret_key_change_me"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
