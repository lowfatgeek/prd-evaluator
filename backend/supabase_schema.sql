-- Supabase Database Schema for PRD Evaluator

-- Enable UUID extension (usually enabled by default in Supabase)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: uploads
CREATE TABLE uploads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    file_format VARCHAR(10) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    ip_address VARCHAR(45)
);

-- Table: evaluations
CREATE TABLE evaluations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    upload_id UUID NOT NULL REFERENCES uploads(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'pending',
    final_score FLOAT,
    verdict VARCHAR(50),
    result_json JSONB,
    ai_model_used VARCHAR(100),
    tokens_used INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    completed_at TIMESTAMP WITH TIME ZONE,
    error_message TEXT,
    output_language VARCHAR(5) DEFAULT 'en'
);

-- Note: Ensure that you've also created the Storage Bucket named "prd_documents"
-- in your Supabase dashboard and set up the necessary RLS policies if required.
