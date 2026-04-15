'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getEvaluationResult, getExportPdfUrl } from '@/lib/api';

export default function ResultPage() {
  const params = useParams();
  const reportId = params?.id as string;

  const [status, setStatus] = useState<string>('processing');
  const [resultData, setResultData] = useState<any>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    if (!reportId) return;
    let intervalId: NodeJS.Timeout;
    const poll = async () => {
      try {
        const data = await getEvaluationResult(reportId);
        setStatus(data.status);
        if (data.status === 'completed') {
          setResultData(data.result);
          clearInterval(intervalId);
        } else if (data.status === 'failed') {
          setErrorText(data.error_message || 'Evaluation failed.');
          clearInterval(intervalId);
        }
      } catch (err) {
         console.warn("Polling error:", err);
      }
    };

    poll();
    intervalId = setInterval(poll, 3000);
    return () => clearInterval(intervalId);
  }, [reportId]);

  if (status === 'processing') {
    return (
      <div className="bg-[#0e0e0e] text-[#e7e5e5] min-h-screen flex flex-col items-center justify-center relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c6c6c7_0%,transparent_50%)] opacity-5"></div>
        <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-primary text-6xl animate-spin mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span>
            <h2 className="text-3xl font-bold tracking-tight mb-2 animate-pulse">Running Telemetry Scan...</h2>
            <p className="text-on-surface-variant font-mono text-sm tracking-widest uppercase">ID: {reportId}</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
      return (
        <div className="bg-[#0e0e0e] text-[#e7e5e5] min-h-screen flex flex-col items-center justify-center relative font-sans">
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg bg-surface-container-high p-12 rounded-xl">
              <span className="material-symbols-outlined text-error text-6xl mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-error/10 border border-error/20" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Assessment Failed</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-sm">{errorText}</p>
              <Link href="/" className="px-6 py-3 bg-surface-container-highest text-on-surface font-semibold rounded-md hover:bg-surface-bright transition-all inline-block hover:scale-[1.02] active:scale-95">Go Back</Link>
          </div>
        </div>
      );
  }

  const finalScore = resultData?.final_score || 0;
  const strengths = resultData?.strengths || [];
  const weaknesses = resultData?.weaknesses || [];
  const categories = resultData?.category_scores || {};
  const missingNodes = resultData?.missing_sections || [];
  const improvementSugs = resultData?.improvement_suggestions || [];

  // Status mapping for the verdict chip
  const getStatusStyles = (score: number) => {
    if (score >= 9) return { color: 'bg-green-500/10 text-green-400 border-green-500/20', icon: 'celebration' };
    if (score >= 7) return { color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: 'verified' };
    if (score >= 5) return { color: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: 'sentiment_satisfied' };
    return { color: 'bg-red-500/10 text-red-400 border-red-500/20', icon: 'report_problem' };
  };
  const statusStyle = getStatusStyles(finalScore);

  return (
    <div className="bg-[#0e0e0e] text-[#e7e5e5] font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="w-full h-16 border-none bg-[#131313]/90 backdrop-blur-md sticky top-0 z-50">
        <nav className="flex justify-center items-center px-12 max-w-[1920px] mx-auto w-full h-full relative">
          <Link href="/" className="text-xl font-bold text-[#e7e5e5] tracking-tight">PRDmetrix</Link>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-16">
        {/* Hero: Composite Score */}
        <section className="mb-20">
          <div className="bg-surface-container-low rounded-xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 max-w-xl">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">fingerprint</span>
                ID: {reportId}
              </h4>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">Product Integrity Assessment</h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                A comprehensive evaluation of the PRD ecosystem based on real-time neural telemetry. This score represents the structural harmony between user intent and platform execution.
              </p>
              
              {/* Contextual Action Row */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link href="/" className="bg-primary text-on-primary px-6 py-3 rounded-md font-semibold hover:opacity-90 active:scale-[0.99] transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>add_box</span>
                    New Analysis
                </Link>
                <button 
                    onClick={() => window.open(getExportPdfUrl(reportId))}
                    className="border border-[#acabaa]/30 text-[#e7e5e5] px-6 py-3 rounded-md font-medium hover:bg-[#acabaa]/10 active:scale-[0.98] transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download PDF
                </button>
                <button 
                    onClick={handleCopyLink}
                    className="border border-[#acabaa]/30 text-[#e7e5e5] px-6 py-3 rounded-md font-medium hover:bg-[#acabaa]/10 active:scale-[0.98] transition-all flex items-center gap-2 w-[140px] justify-center">
                    <span className="material-symbols-outlined text-sm">{isCopied ? 'check' : 'share'}</span>
                    {isCopied ? 'Copied!' : 'Share'}
                </button>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-surface-container-highest flex items-center justify-center relative">
                <div 
                    className="absolute inset-0 border-8 border-primary rounded-full" 
                    style={{ clipPath: `polygon(0 0, 100% 0, 100% ${finalScore * 10}%, 0 ${finalScore * 10}%)` }}>
                </div>
                <span className="text-6xl font-black text-on-surface">{(finalScore * 10).toFixed(0)}</span>
              </div>
              
              {/* Verdict Chip */}
              <div className={`mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-xl border ${statusStyle.color} backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both shadow-lg shadow-black/20`}>
                <span className="material-symbols-outlined text-xl">{statusStyle.icon}</span>
                <span className="text-sm font-bold uppercase tracking-[0.15em]">{resultData?.verdict || "Assessment Complete"}</span>
              </div>
            </div>
            
            {/* Background Subtle Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 30%, #c6c6c7 0%, transparent 70%)" }}></div>
          </div>
        </section>

        {/* Strengths & Weaknesses Side-by-Side */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-surface-container p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h3 className="text-xl font-bold tracking-tight">Core Strengths</h3>
            </div>
            <ul className="space-y-6">
              {strengths.map((str: string, index: number) => (
                <li key={index} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-on-surface">Architectural Positive</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Optimal</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{str}</p>
                </li>
              ))}
              {strengths.length === 0 && <p className="text-sm text-on-surface-variant italic">No standout strengths identified.</p>}
            </ul>
          </div>
          <div className="bg-surface-container p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <h3 className="text-xl font-bold tracking-tight">Identified Weaknesses</h3>
            </div>
            <ul className="space-y-6">
              {weaknesses.map((weak: string, index: number) => (
                <li key={index} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-on-surface">Entropy Alert</span>
                    <span className="text-xs bg-error/10 text-error px-2 py-0.5 rounded">High Friction</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{weak}</p>
                </li>
              ))}
              {weaknesses.length === 0 && <p className="text-sm text-on-surface-variant italic">No significant entropy detected.</p>}
            </ul>
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-10">Category Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {Object.entries(categories).map(([k, meta]: [string, any], index) => {
               if (meta.applicable === false) return null;
               const catScore = meta.score || 0;
               const percentage = (catScore * 10).toFixed(0);
               const isGood = catScore >= 7;

               return (
                <div key={k} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {isGood ? 'check_circle' : 'analytics'}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-on-surface capitalize">{k.replace("_", " ")}</h4>
                      <span className="text-sm font-medium">{percentage}%</span>
                    </div>
                    <div className="w-full h-1 bg-surface-container-highest rounded-full mb-4">
                      <div className={`h-full ${isGood ? 'bg-primary' : 'bg-error'} rounded-full`} style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                        {meta.explanation}
                        <br/>
                        <span className="opacity-50 mt-2 block">Evid: {meta.evidence}</span>
                    </p>
                  </div>
                </div>
               );
            })}
          </div>
        </section>

        {/* Improvement Roadmap */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-10">Improvement Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Missing Sections Prominent Box */}
            <div className="md:col-span-2 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-error mb-6 block">Phase 01 — Structural Gaps</span>
                <h3 className="text-3xl font-bold text-on-surface mb-4">Missing Requirements</h3>
                <div className="text-on-surface-variant mb-8 space-y-3">
                    {missingNodes.map((miss: string, index: number) => (
                        <div key={index} className="flex gap-3 items-start">
                            <span className="material-symbols-outlined text-error text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                            <span className="text-sm font-medium">{miss}</span>
                        </div>
                    ))}
                    {missingNodes.length === 0 && <span>No structural gaps detected in document schema.</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-semibold">Priority: High</div>
              </div>
            </div>

            {/* Smart Suggestions Callout */}
            <div className="bg-primary p-10 rounded-xl text-on-primary flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-6 block">Phase 02 — Optimization</span>
                <h3 className="text-2xl font-bold mb-4">Actionable Feedback</h3>
                <div className="space-y-4">
                    {improvementSugs.slice(0, 3).map((sug: string, index: number) => (
                        <p key={index} className="text-sm font-medium opacity-90 pb-3 border-b border-on-primary/10 last:border-0">{sug}</p>
                    ))}
                    {improvementSugs.length === 0 && <p className="text-sm font-medium opacity-80">No additional optimization needed.</p>}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Telemetry Snapshot */}
        <section className="mb-20">
          <div className="bg-surface-container-low p-12 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Telemetry Snapshot</h3>
                <p className="text-on-surface-variant text-sm">Engine execution and payload routing data.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Model:</span>
                  <span className="text-xs font-medium text-on-surface-variant">{resultData?.model_used || "Local Engine"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Tokens:</span>
                  <span className="text-xs font-medium text-on-surface-variant">{resultData?.tokens_used || 0}</span>
                </div>
              </div>
            </div>
            
            {/* Visualizer */}
            <div className="h-48 flex items-end justify-between gap-2">
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[20%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[65%]"></div>
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[40%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[85%]"></div>
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[55%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[75%]"></div>
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[95%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[70%]"></div>
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[40%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[60%]"></div>
              <div className="flex-grow bg-surface-container-highest rounded-t-sm h-[30%] transition-all hover:bg-primary"></div>
              <div className="flex-grow bg-primary rounded-t-sm h-[80%]"></div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
              <span>INIT</span>
              <span>PARSING</span>
              <span>NEURAL</span>
              <span>EMISSION</span>
              <span>DONE</span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#131313] border-none py-20 px-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1920px] mx-auto">
          <div className="text-lg font-bold text-[#e7e5e5] mb-8 md:mb-0">PRDmetrix</div>
          <div className="flex gap-8 md:gap-12 text-xs font-medium uppercase tracking-[0.05em] mb-8 md:mb-0 flex-wrap justify-center">
            <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors" href="#">Privacy Policy</a>
            <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors" href="#">Terms of Service</a>
            <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors" href="#">Security</a>
            <a className="text-[#acabaa] hover:text-[#e7e5e5] transition-colors" href="#">Contact</a>
          </div>
          <div className="text-[#acabaa] text-xs font-medium uppercase tracking-[0.05em] text-center md:text-right">
            © 2024 PRDmetrix. All rights reserved. <br/>
            <span className="opacity-40">Built upon the Architectural Void.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
