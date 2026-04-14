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

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      setIsUploading(true);
      
      try {
        const uploadId = await uploadDocument(acceptedFiles[0]);
        const evalId = await startEvaluation(uploadId, 'en');
        router.push(`/result/${evalId}`);
      } catch (err) {
        console.error(err);
        alert(err instanceof Error ? err.message : 'Upload failed.');
        setIsUploading(false);
        setUploadedFile(null);
      }
    }
  }, [router]);

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
    <>
      {/* TopNavBar */}
      <nav className="bg-[#001523]/70 backdrop-blur-xl sticky top-0 z-50 shadow-[0_40px_40px_0_rgba(2,75,115,0.08)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-semibold tracking-[-0.04em] text-[#cae6ff]">PRD Evaluator</span>
            <div className="hidden md:flex gap-6">
              <Link className="font-sans font-semibold tracking-tighter text-[#ffb784] border-b-2 border-[#f77f00] pb-1" href="/">Dashboard</Link>
              <Link className="font-sans font-semibold tracking-tighter text-[#dec1af] hover:text-[#cae6ff] transition-all duration-300" href="/">Evaluator</Link>
              <Link className="font-sans font-semibold tracking-tighter text-[#dec1af] hover:text-[#cae6ff] transition-all duration-300" href="/">Library</Link>
              <Link className="font-sans font-semibold tracking-tighter text-[#dec1af] hover:text-[#cae6ff] transition-all duration-300" href="/">Benchmarks</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-3 py-1.5">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none" placeholder="Search projects..." type="text" />
            </div>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-[#0c3851]/50 p-2 rounded-full transition-all">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-[#0c3851]/50 p-2 rounded-full transition-all">settings</button>
            <button className="bg-primary-container text-on-primary font-semibold py-2 px-5 rounded-lg scale-95 active:scale-90 transition-all">New PRD</button>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 py-12 relative flex flex-col items-center">
        {/* TOP ROW: Massive Striking Headline */}
        <div className="w-full text-center mb-16 pt-12">
          <div className="inline-block px-3 py-1 rounded bg-surface-container-high border border-outline-variant/20 mb-8">
            <span className="font-sans uppercase tracking-[0.05em] text-xs text-primary font-bold">Protocol V2.4 Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.05em] text-on-surface leading-[1] mb-10 max-w-5xl mx-auto">
            Know if your <span className="text-gradient">PRD is ready</span> for engineering.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-12">
            The Obsidian Engine subjects your requirements to rigorous multi-dimensional analysis, catching ambiguities before they become technical debt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary-container text-on-primary font-bold py-4 px-10 rounded-lg flex items-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-primary-container/20">
              <span className="material-symbols-outlined">bolt</span>
              Start Evaluation
            </button>
            <button className="bg-secondary-container text-on-secondary-container font-bold py-4 px-10 rounded-lg border border-outline-variant/10 hover:bg-surface-container-highest transition-all">
              View Demo Benchmarks
            </button>
          </div>
        </div>

        {/* MIDDLE ROW: Prominent Upload Pane */}
        <div className="w-full max-w-5xl relative group mb-32">
          <div className="absolute inset-0 bg-primary-container/10 blur-[80px] group-hover:bg-primary-container/20 transition-all duration-700 rounded-3xl"></div>
          <div 
            {...getRootProps()}
            className={`glass-panel rounded-3xl p-12 relative overflow-hidden flex flex-col items-center justify-center transition-all cursor-pointer ${isDragActive ? 'glow-orange border-primary scale-[1.02]' : 'border-primary/40 hover:glow-orange hover:border-primary/60'}`}
          >
            <input {...getInputProps()} />
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            <div className={`mb-10 p-8 rounded-full bg-surface-container-highest border border-primary/30 relative transition-all ${isUploading ? 'animate-bounce' : 'hover:bg-surface-container'}`}>
              <span className="material-symbols-outlined text-primary text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isUploading ? 'hourglass_empty' : (uploadedFile ? 'task' : 'upload_file')}
              </span>
              {!isUploading && !uploadedFile && <div className="absolute top-1 right-1 w-5 h-5 bg-primary rounded-full animate-pulse"></div>}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              {isUploading ? 'Analyzing Document...' : (uploadedFile ? uploadedFile.name : (isDragActive ? 'Drop it here!' : 'Drop your PRD here'))}
            </h3>
            <p className="text-on-surface-variant text-center text-lg mb-12 max-w-lg">
              {isUploading ? 'Running Neural Engine against 9-Axis Criteria...' : 'Supports .pdf, .docx, .txt, or .md. Analysis takes < 2 minutes.'}
            </p>
            
            {!isUploading && !uploadedFile && (
              <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 flex items-center justify-between group-hover:border-primary/50 transition-colors shadow-2xl">
                <span className="text-on-surface-variant text-lg font-sans uppercase tracking-wider transition-colors">Select Source File</span>
                <span className="material-symbols-outlined text-on-surface-variant transition-colors text-3xl">add</span>
              </div>
            )}

            {/* Technical Deco */}
            <div className="absolute bottom-6 left-8 font-sans text-[10px] text-outline opacity-40 uppercase tracking-widest">ARCH-ID: 8829-PX-VERTICAL</div>
            <div className="absolute top-6 right-8 flex gap-2">
              <div className={`w-2 h-2 ${isUploading ? 'bg-primary animate-ping' : 'bg-primary/40'} rounded-full`}></div>
              <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Bento Grid Features */}
        <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          {/* AI Analysis */}
          <div className="md:col-span-8 glass-panel rounded-2xl p-10 flex flex-col justify-between hover:bg-surface-container-highest/60 transition-all group min-h-[400px]">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-secondary-container rounded-xl">
                <span className="material-symbols-outlined text-secondary text-4xl">psychology</span>
              </div>
              <span className="text-xs font-sans text-secondary font-bold tracking-widest bg-secondary-container/30 px-3 py-1.5 rounded-full uppercase">Real-time LLM Analysis</span>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-6 group-hover:text-primary transition-colors">AI Narrative Analysis</h4>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">Our neural engine scans for semantic contradictions, missing edge cases, and architectural misalignment in seconds, ensuring your document is bulletproof.</p>
            </div>
          </div>

          {/* Actionable Reports */}
          <div className="md:col-span-4 glass-panel rounded-2xl p-10 flex flex-col gap-8 hover:bg-surface-container-highest/60 transition-all border-l-2 border-l-primary/40">
            <span className="material-symbols-outlined text-primary text-5xl">assignment_turned_in</span>
            <h4 className="text-3xl font-bold">Actionable Scorecards</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-sans text-on-surface-variant uppercase mb-1"><span>Precision</span><span>85%</span></div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_rgba(255,183,132,0.5)]"></div>
              </div>
              <div className="flex justify-between text-xs font-sans text-on-surface-variant uppercase mb-1"><span>Scalability</span><span>42%</span></div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%] opacity-60"></div>
              </div>
              <div className="flex justify-between text-xs font-sans text-on-surface-variant uppercase mb-1"><span>Consistency</span><span>71%</span></div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[71%] shadow-[0_0_10px_rgba(255,183,132,0.3)]"></div>
              </div>
            </div>
            <p className="text-on-surface-variant">Direct feedback loops tailored for every stakeholder role in the organization.</p>
          </div>

          {/* Benchmarks */}
          <div className="md:col-span-12 lg:col-span-9 glass-panel rounded-2xl p-10 overflow-hidden relative group min-h-[350px]">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h4 className="text-3xl font-bold">Market Benchmarking</h4>
                <p className="text-on-surface-variant text-lg">Compare your PRD quality against 50k+ industry documents.</p>
              </div>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary text-3xl">open_in_full</button>
            </div>
            <div className="flex gap-6 items-end h-48">
              <div className="flex-1 bg-surface-container-high rounded-t-xl h-[50%] group-hover:h-[75%] transition-all duration-700"></div>
              <div className="flex-1 bg-primary/30 rounded-t-xl h-[35%] group-hover:h-[55%] transition-all duration-700 delay-75"></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl h-[85%] group-hover:h-[95%] transition-all duration-700 delay-150"></div>
              <div className="flex-1 bg-primary-container/80 rounded-t-xl h-[65%] group-hover:h-[85%] transition-all duration-700 delay-200 shadow-[0_0_20px_rgba(247,127,0,0.3)]"></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl h-[45%] group-hover:h-[65%] transition-all duration-700 delay-300"></div>
              <div className="flex-1 bg-secondary/20 rounded-t-xl h-[60%] group-hover:h-[80%] transition-all duration-700 delay-400"></div>
            </div>
          </div>

          {/* 9 Dimensions */}
          <div className="md:col-span-12 lg:col-span-3 bg-surface-container rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
            <h4 className="text-7xl font-bold text-primary mb-4">09</h4>
            <div>
              <h5 className="text-2xl font-bold mb-3">Architectural Pillars</h5>
              <p className="text-on-surface-variant">We evaluate against 9 core dimensions including Scalability, Security, and CX impact.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="relative w-full py-24 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>
          <div className="mb-6 font-sans text-primary tracking-[0.2em] uppercase text-sm font-bold">Ready for deployment?</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 max-w-3xl leading-tight">Transition from ambiguous docs to <span className="text-gradient">shippable logic</span>.</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 glass-panel px-10 py-6 rounded-3xl border-primary/20">
            <div className="text-left">
              <p className="text-xl font-bold">Join 2,400+ Architects</p>
              <p className="text-on-surface-variant">Evaluating 12k+ documents weekly</p>
            </div>
            <button className="bg-primary-container text-on-primary font-bold py-3 px-8 rounded-xl hover:scale-105 transition-all">Get Started</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#00101c] py-16 border-t border-[#574335]/10 mt-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-[#cae6ff] font-bold text-2xl tracking-tight">PRD EVALUATOR</div>
            <p className="font-sans text-on-surface-variant max-w-sm leading-relaxed">
              © 2024 PRD Evaluator. Built for Architects. Precision grade analysis for modern product teams powered by Obsidian Engine.
            </p>
          </div>
          <div className="grid grid-cols-2 md:flex gap-x-12 gap-y-6">
            <div className="flex flex-col gap-4">
              <span className="text-on-surface font-bold text-sm uppercase tracking-widest">Platform</span>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Benchmarks</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Enterprise</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-on-surface font-bold text-sm uppercase tracking-widest">Resources</span>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Docs</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-on-surface font-bold text-sm uppercase tracking-widest">Legal</span>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30" href="#">Privacy</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
