'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import { uploadDocument, startEvaluation } from '@/lib/api';
export default function LandingPage() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');

  const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ms', name: 'Malaysia' },
    { code: 'ja', name: 'Japan' },
    { code: 'ko', name: 'Korea' },
    { code: 'zh', name: 'China' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ru', name: 'Russian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'vi', name: 'Vietnamese' },
  ];

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      setIsUploading(true);
      
      try {
        const uploadId = await uploadDocument(acceptedFiles[0]);
        const evalId = await startEvaluation(uploadId, selectedLang);
        router.push(`/result/${evalId}`);
      } catch (err) {
        console.error(err);
        alert(err instanceof Error ? err.message : 'Upload failed.');
        setIsUploading(false);
        setUploadedFile(null);
      }
    }
  }, [router, selectedLang]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'text/markdown': ['.md']
    },
    maxFiles: 1
  });

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-on-primary font-sans bg-[#0e0e0e] text-[#e7e5e5]">
      {/* Top Navigation */}
      <nav className="bg-[#131313]/80 backdrop-blur-md flex justify-between items-center px-12 max-w-[1920px] mx-auto w-full sticky top-0 z-50 h-16 border-none">
        <div className="text-xl font-bold text-[#e7e5e5] tracking-tight">
          PRD<span className="opacity-50">.AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-[#e7e5e5] font-semibold border-b border-[#e7e5e5] pb-1 text-sm tracking-tight transition-all" href="/">Platform</Link>
          <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors duration-200 font-medium text-sm tracking-tight" href="#">Solutions</a>
          <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors duration-200 font-medium text-sm tracking-tight" href="#">Resources</a>
          <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors duration-200 font-medium text-sm tracking-tight" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#acabaa] text-sm font-medium hover:text-[#e7e5e5] transition-colors">Log In</button>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all">Sign Up</button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-medium tracking-widest uppercase mb-8 border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            V2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 max-w-4xl leading-[1.1]">
            Refine your vision into <span className="text-primary italic">Architectural</span> precision.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            The ultimate platform for product managers to transform raw ideas into production-ready specifications with AI-driven rigor.
          </p>

          {/* Language Selection */}
          <div className="mb-10 w-full max-w-xs text-left">
            <label htmlFor="lang-select" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4 ml-1">
                Report Language
            </label>
            <div className="relative group">
                <select
                    id="lang-select"
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="w-full bg-surface-container-high text-on-surface text-sm font-medium py-3 px-4 rounded-lg border border-outline-variant/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer transition-all outline-none"
                >
                    {LANGUAGES.map(lang => (
                        <option key={lang.code} value={lang.code} className="bg-surface-container-high">{lang.name}</option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
            </div>
          </div>
          
          {/* Drag and Drop Zone */}
          <div 
            {...getRootProps()}
            className={`w-full max-w-3xl aspect-[16/7] bg-surface-container-low rounded-xl border-2 border-dashed ${isDragActive ? 'border-primary/80' : 'border-outline-variant/30 hover:border-primary/50'} flex flex-col items-center justify-center p-8 group transition-colors cursor-pointer relative overflow-hidden`}
          >
            <input {...getInputProps()} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className={`material-symbols-outlined text-4xl mb-4 transition-colors ${isUploading ? 'text-primary animate-bounce' : 'text-on-surface-variant group-hover:text-primary'}`}>
              {isUploading ? 'hourglass_empty' : (uploadedFile ? 'task' : 'upload_file')}
            </span>
            <h3 className="text-on-surface font-semibold text-lg mb-2 relative z-10">
              {isUploading ? 'Analyzing Document...' : (uploadedFile ? uploadedFile.name : (isDragActive ? 'Drop it here!' : 'Drop your draft PRD here'))}
            </h3>
            <p className="text-on-surface-variant text-sm relative z-10 text-center">
              {isUploading ? 'Running Neural Engine...' : 'Supports PDF, DOCX, and Markdown (Max 10MB)'}
            </p>
            {!isUploading && !uploadedFile && (
              <>
                <div className="mt-6 flex items-center gap-3 relative z-10">
                  <span className="h-px w-8 bg-outline-variant"></span>
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">or</span>
                  <span className="h-px w-8 bg-outline-variant"></span>
                </div>
                <button className="mt-6 bg-surface-container-high text-on-surface px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-surface-bright transition-colors relative z-10">Browse files</button>
              </>
            )}
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-high p-10 rounded-xl flex flex-col items-start hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-4">Rapid Analysis</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                    Our LLM-native core processes complex documents in seconds, identifying logical gaps and structural weaknesses before they hit development.
                </p>
              </div>
              <div className="bg-surface-container-high p-10 rounded-xl flex flex-col items-start hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-4">Actionable Feedback</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                    Receive prioritized suggestions that focus on user outcomes, technical feasibility, and alignment with business objectives.
                </p>
              </div>
              <div className="bg-surface-container-high p-10 rounded-xl flex flex-col items-start hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-4">Strict Guidelines</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                    Enforce industry-standard frameworks like BRD, PRD, and User Stories with automated compliance checking for every draft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Content Section */}
        <section className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-on-surface mb-8 leading-tight">The Void between concept and code. Filled.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-primary h-12 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-2">Automated Traceability</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Automatically map features to requirements to ensure 100% coverage during the QA phase.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-outline-variant h-12 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-2">Stakeholder Alignment</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Generated summaries for executives and technical deep-dives for engineers from one source.</p>
                </div>
              </div>
            </div>
            <button className="mt-12 flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                Explore the Platform <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50"></div>
            <img alt="Abstract architecture" className="relative rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLhi9dcgzKENK0AQ3s1LvQdcCstcQ3ZiHKJYb4MNPwzdFk-jcBAdZZUevw2KG2u4uNOYiMVTWIHxuMQ_b3TTd_Q_71VWCcoB1bLyIi4A0YjaU2_FCqfOPE-0MUU7UXTM8qDC46s8Qu0XOjduOMfY1vVr8KtuPShMl2iX-dwB5mGboOPjCxJzs7UmL7nQKl8lO1Bw51ZUP2dtFxsGWOOvZMbVKrworBZyX5cJQg-DmUdi298qFF6X0J2-RX2hkK2WdY-R5F2hnLq0" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] border-none w-full py-20 px-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1920px] mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-lg font-bold text-[#e7e5e5] mb-4">
              PRD<span className="opacity-50">.AI</span>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa]">
              © 2024 PRD.AI. All rights reserved. Built upon the Architectural Void.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="#">Privacy Policy</a>
            <a className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="#">Terms of Service</a>
            <a className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="#">Security</a>
            <a className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
