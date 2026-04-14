# PRD Evaluator

PRD Evaluator is an AI-powered web application that helps product teams, startups, and developers instantly evaluate and validate their Product Requirements Documents (PRDs). The application provides automatic scoring, detection of missing sections, and actionable recommendations using the OpenRouter AI architecture.

## Repository Structure

This project follows a monorepo-style architecture, separating the Frontend and Backend into independent directory scopes:

- `frontend/`: The User Interface built using **Next.js** (TypeScript) + Tailwind CSS + Shadcn UI.
- `backend/`: The core API server built using **FastAPI** (Python), handling document parsing, AI integration, database operations (**Supabase PostgreSQL**), cloud document storage (**Supabase Storage**), and PDF report generation (`fpdf2`).

---

## Prerequisites

Make sure your system has the following minimum requirements installed:
- [Node.js](https://nodejs.org/en) (v18 or higher recommended) & npm/yarn/pnpm
- [Python](https://www.python.org/downloads/) (v3.9 or higher recommended)
- Git (optional)
- A [Supabase](https://supabase.com/) account and project.
- An [OpenRouter API](https://openrouter.ai/) Key.

---

## ⚙️ Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
```

**1. Create a Virtual Environment (Optional but highly recommended)**
Isolate your package installations:
```bash
python -m venv venv

# Activate on Windows:
venv\Scripts\activate

# Activate on macOS/Linux:
source venv/bin/activate
```

**2. Install Python Dependencies**
Download the required packages, including the Supabase client:
```bash
pip install -r requirements.txt
```

**3. Configure Supabase Cloud Storage**
Go to your Supabase project dashboard:
- Create a new Storage Bucket and name it exactly **`prd_documents`**.
- Set appropriate privacy algorithms (For testing, granting public object insertion may ease the load, but apply RLS policies for production).

**4. Configure Environment Variables**
Create and configure the `.env` file in the `/backend` root directory using your Supabase credentials:
```env
# Database Settings 
DB_PROTOCOL=postgresql
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_SUPABASE_REF.supabase.co:5432/postgres

# Supabase Storage Configuration
SUPABASE_URL=https://YOUR_SUPABASE_REF.supabase.co
SUPABASE_KEY=ey_your_supabase_service_role_key_here

# OpenRouter Configuration for AI Evaluation
OPENROUTER_API_KEY=sk-or-your-api-key-here
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet

# Security & CORS
ENVIRONMENT=development
CORS_ORIGINS=["http://localhost:3000"]
```
> **Mock API Note:** If your `SUPABASE_KEY` or `OPENROUTER_API_KEY` are not set (left as placeholder defaults), the FastAPI backend is designed to safely failover by initiating local `SQLite` tables and `Mock JSON Responses`. This allows the UI engineers to test endpoints locally without causing server crashes.

**5. Run the Local Backend Server**
Start the Uvicorn server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
If successful, the backend API will run at `http://localhost:8000`.
You can explore the interactive Swagger documentation at: `http://localhost:8000/docs`

---

## 💻 Frontend Setup

Open a **new terminal window** (leave the backend terminal running) and navigate to the frontend directory:
```bash
cd frontend
```

**1. Install Node.js Dependencies**
Download the required framework packages:
```bash
npm install
# If you use pnpm or yarn:
# yarn install // pnpm install
```

**2. Adjust Environment Variables (If needed)**
If the backend Endpoint URL needs to be changed, create an `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

**3. Start the Development Server**
Launch the Next.js development server:
```bash
npm run dev
```

**4. Test the Application**
Open your preferred browser (Chrome/Firefox/Edge) and navigate to:
```
http://localhost:3000
```

---

## 🐳 EasyPanel / Docker VPS Deployment

The application provides native `Dockerfile` build processes for both the frontend and backend, seamlessly compatible with **EasyPanel**, **Coolify**, or standard Docker orchestration.

### Deploying the Backend (FastAPI)
1. In EasyPanel, create a new **App**.
2. Point it to your Git repository (or push the files manually).
3. Set the **Build Method** to `Dockerfile`.
4. Ensure the root path points to `/backend` (or explicitly set the Dockerfile context path).
5. Map the target container port configuration to `8000`.
6. Inject all the Environment Variables into the EasyPanel app UI (e.g., `DATABASE_URL`, `SUPABASE_URL`, `OPENROUTER_API_KEY`).
7. Click **Deploy**. EasyPanel will handle creating the container using the generated `Dockerfile` logic.

### Deploying the Frontend (Next.js)
1. Create a second, separate **App** in EasyPanel.
2. Point it to the identical Git repository.
3. Set the build directory / context to `/frontend`.
4. Map the HTTP routing network port logic to `3000`.
5. Add your endpoint environment variables (e.g., `NEXT_PUBLIC_API_BASE_URL` mapped to the backend public URL you configured previously).
6. Click **Deploy**.

---

## Key Features 🚀

- **Fast & Responsive Engine:** Seamless drag-and-drop UI with support for file uploads up to 10MB per file. Documents are piped securely into Supabase Cloud directly.
- **Comprehensive Score Framework:** Analyzes 9 core engineering/design metrics without blindly hallucinating missing sections outside the document parameters.
- **Reporting Generator Tools:** Generates a complete evaluation report as a clean `.pdf` file in a single click using native Python libraries (`fpdf2`).
- **Flexible i18n Localization Output:** Evaluation feedback and suggestions can be generated in either *English* or *Bahasa Indonesia* to match the team's preference.
