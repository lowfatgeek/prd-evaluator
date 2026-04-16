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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const FAQS = [
    {
      question: "What is PRDMetrix?",
      answer: "PRDMetrix is an AI-powered tool that evaluates Product Requirements Documents (PRDs) for app development. Upload your PRD and receive structured feedback, scoring across key product dimensions, and actionable recommendations to ensure your document is clear, complete, and ready for building web or mobile applications."
    },
    {
      question: "What types of documents can I upload?",
      answer: "PRDMetrix currently supports the following formats: TXT, Markdown (.md), and PDF. Each document is automatically parsed and analyzed by the evaluation engine."
    },
    {
      question: "What does PRDMetrix evaluate in my PRD?",
      answer: "Your PRD is evaluated across 9 critical product development categories, including: Product clarity, User understanding, Feature definition, Technical architecture, Execution readiness, User flow, and Non-functional requirements. Each category receives a score and detailed feedback."
    },
    {
      question: "How accurate is the AI evaluation?",
      answer: "PRDMetrix uses a structured evaluation framework combined with AI analysis. The AI examines the actual content of your document and evaluates it based on established product development criteria. While the feedback is highly useful, it should be used as guidance rather than an absolute judgment."
    },
    {
      question: "Is my document stored or shared?",
      answer: "Your document is processed securely and used only for generating the evaluation report. We do not share your documents with other users, and they are not used to train external models."
    },
    {
      question: "Do I need to create an account to use PRDMetrix?",
      answer: "No. You can upload and evaluate your PRD without creating an account. Account features may be introduced in future versions for saving reports and collaboration."
    },
    {
      question: "Can PRDMetrix evaluate PRDs for both mobile and web applications?",
      answer: "Yes. PRDMetrix is designed to evaluate product specifications for both mobile apps and web applications, including user flows, architecture, and feature definitions."
    },
    {
      question: "What will I receive after uploading my PRD?",
      answer: "After analysis, you will receive: An overall PRD score, category-by-category evaluation, identified weaknesses and missing sections, actionable improvement suggestions, and a downloadable evaluation report."
    },
    {
      question: "Can PRDMetrix help me improve my PRD?",
      answer: "Yes. In addition to scoring your PRD, the platform provides specific suggestions on how to strengthen your document, including missing sections and areas that need clarification."
    },
    {
      question: "How can I contact you?",
      answer: "Contact us at hello@prdmetrix.com"
    }
  ];

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
      'text/plain': ['.txt'],
      'text/markdown': ['.md']
    },
    maxFiles: 1
  });

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-on-primary font-sans bg-[#0e0e0e] text-[#e7e5e5]">
      {/* Top Navigation */}
      <nav className="bg-[#131313]/80 backdrop-blur-md flex justify-center items-center px-12 max-w-[1920px] mx-auto w-full sticky top-0 z-50 h-16 border-none">
        <Link href="/" className="text-xl font-bold text-[#e7e5e5] tracking-tight hover:text-[#e7e5e5]">
          PRDmetrix
        </Link>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="upload-section" className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-medium tracking-widest uppercase mb-8 border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            V2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 max-w-4xl leading-[1.1]">
            Your PRD might not be ready. <span className="text-primary italic">Find out</span> in seconds.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Because bad PRDs create bad products. Upload yours and get objective scoring, insights, and actionable feedback.
          </p>

          {/* Drag and Drop Zone Container */}
          <div className="relative w-full max-w-3xl mt-16 group">
            
            {/* Floating Language Selector (Pills) */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#1a1a1a]/95 backdrop-blur-2xl p-1.5 rounded-full border border-outline-variant/20 shadow-2xl z-20 whitespace-nowrap">
                {LANGUAGES.filter(l => ['en', 'id', 'ja'].includes(l.code)).map((lang) => (
                    <button
                        key={lang.code}
                        onClick={(e) => { e.stopPropagation(); setSelectedLang(lang.code); }}
                        className={`px-6 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-300 ${
                            selectedLang === lang.code 
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/30 scale-105' 
                            : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                        }`}
                    >
                        {lang.name}
                    </button>
                ))}
                
                {/* Custom "More" Dropdown Pill */}
                <div className="relative">
                    <select
                        value={['en', 'id', 'ja'].includes(selectedLang) ? "" : selectedLang}
                        onChange={(e) => setSelectedLang(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className={`pl-5 pr-9 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-300 outline-none appearance-none cursor-pointer ${
                            !['en', 'id', 'ja'].includes(selectedLang) 
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' 
                            : 'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-white/10'
                        }`}
                    >
                        <option value="" disabled hidden>More</option>
                        {LANGUAGES.filter(l => !['en', 'id', 'ja'].includes(l.code)).map(lang => (
                            <option key={lang.code} value={lang.code} className="bg-[#1a1a1a] text-on-surface">
                                {lang.name}
                            </option>
                        ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none opacity-60">
                        expand_more
                    </span>
                </div>
            </div>

            {/* Main Drop Zone */}
            <div 
              {...getRootProps()}
              className={`w-full aspect-[16/7] bg-surface-container-low rounded-xl border-2 border-dashed ${isDragActive ? 'border-primary/80' : 'border-outline-variant/30 hover:border-primary/50'} flex flex-col items-center justify-center p-8 group transition-all duration-500 cursor-pointer relative overflow-hidden`}
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
                {isUploading ? 'Running Neural Engine...' : 'Supports PDF, TXT, and Markdown (Max 10MB)'}
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
                    Our AI Agent processes complex documents in seconds, identifying logical gaps and structural weaknesses before they hit development.
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
                    Evaluations follow proven structured framework standards used by product teams and startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Content Section */}
        <section className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-on-surface mb-8 leading-tight">Build better apps by fixing the PRD first.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-primary h-12 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-2">Find gaps before developers do</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">PRDMetrix highlights missing requirements, unclear flows, and incomplete system design.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-outline-variant h-12 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg mb-2">Ship mobile and web apps faster</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Start development with a PRD that&apos;s structured, validated, and ready for implementation.</p>
                </div>
              </div>
            </div>
            <button onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })} className="mt-12 flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                Upload Your PRD <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50"></div>
            <img alt="PRDmetrix Preview" className="relative rounded-xl transition-all duration-700 w-full aspect-[4/5] object-cover shadow-2xl" src="https://ik.imagekit.io/kelaswfa/img/preview.jpg" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-on-surface mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant text-center mb-16 max-w-2xl mx-auto">
              Everything you need to know about PRDMetrix and how it helps you build better products.
            </p>
            
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-outline-variant/20 rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'bg-surface-container-high' : 'bg-surface-container-low hover:bg-surface-container-lowest'}`}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-bold text-on-surface pr-8">{faq.question}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 text-primary ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div 
                    className={`px-8 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  >
                    <p className="text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] border-none w-full py-20 px-12 mt-auto">
        <div className="flex flex-col items-center text-center w-full max-w-[1920px] mx-auto">
          <div className="mb-6">
            <div className="text-2xl font-bold text-[#e7e5e5]">
              PRDmetrix
            </div>
          </div>
          
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] mb-8">
            © {new Date().getFullYear()} PRDmetrix. All rights reserved. Built upon the Architectural Void.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="/privacy">Privacy Policy</Link>
            <Link className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
