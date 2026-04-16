# PRDmetrix 🚀

**PRDmetrix** is a premium, AI-powered assessment platform designed to instantly evaluate Product Requirements Documents (PRDs). Built for product managers, architects, and engineering leads, it provides real-time neural telemetry to analyze structural integrity, feature clarity, and execution readiness.

![Landing Preview](https://ik.imagekit.io/kelaswfa/img/preview.jpg)

## 💎 Design System: Obsidian Architect
PRDmetrix utilizes the **Obsidian Architect** design system—a high-end, glassmorphic UI featuring a deep Navy and Gold color palette. The interface is built for "Vibe Coding" efficiency, ensuring a futuristic and professional user experience.

---

## ⚡ Key Features

- **Neural Evaluation Engine**: Analyzes documents across 9 critical product dimensions including Technical Architecture, User Flow, and Non-functional Requirements.
- **Dynamic Verdict System**: Status-aware evaluation chips providing instant visual feedback on your PRD's "Integrity Score".
- **Advanced Utility Bar**: 
    - **Real-time Metadata**: Automatic tracking of file size, format, and evaluation timestamps.
    - **Instant Sharing**: Built-in URL copy drawer for seamless team collaboration.
- **Contextual Loading Experience**: Randomized architecture-themed loading phrases (*Architecting Structural Integrity...*, *Decoding Product DNA...*) provide a high-end system feel.
- **Professional PDF Export**: Generate clean, shareable assessment reports in a single click.
- **Universal Localized Support**: Full support for PRD evaluation and feedback in both **English** and **Bahasa Indonesia**.

---

## 🏗️ Repository Structure

- `frontend/`: Next.js 14 (App Router), Tailwind CSS, TypeScript.
- `backend/`: FastAPI (Python), OpenAI/OpenRouter Engine, Supabase PostgreSQL, and PDF Service.

---

## ⚙️ Quick Start

### 1. Backend Setup (FastAPI)
```bash
cd backend
pip install -r requirements.txt
# Configure your .env with SUPABASE_URL, SUPABASE_KEY, and OPENROUTER_API_KEY
uvicorn app.main:app --reload
```

### 2. Frontend Setup (Next.js)
```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 EasyPanel / Docker Deployment

PRDmetrix is pre-configured for automated deployment via Docker.

### Backend Deployment
- **Method**: Dockerfile (located in `/backend`)
- **Port**: `8000`
- **Required Env**: `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_KEY`, `OPENROUTER_API_KEY`.

### Frontend Deployment
- **Method**: Dockerfile (located in `/frontend`)
- **Port**: `3000`
- **Required Env**: `NEXT_PUBLIC_API_BASE_URL` (pointing to your backend URL).

---

## 🔒 Security & Privacy
Built-in support for Cookie-safe JWT sessions and Supabase Row Level Security (RLS) to ensure your PRDs remain confidential and secure.

---

## 📜 Legal
- [Terms of Service](https://prdmetrix.com/terms)
- [Privacy Policy](https://prdmetrix.com/privacy)

Developed with ❤️ for Product Excellence.
