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
      <div className="bg-[#000a12] text-slate-100 min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-cyan/10 via-[#000a12] to-[#000a12]"></div>
        <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-cyber-cyan text-6xl animate-spin mb-6">wait</span>
            <h2 className="text-3xl font-black mb-2 animate-pulse">Running Neural Engine...</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">ID: {reportId}</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
      return (
        <div className="bg-[#000a12] text-slate-100 min-h-screen flex flex-col items-center justify-center relative">
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
              <span className="material-symbols-outlined text-cyber-orange text-6xl mb-6">error</span>
              <h2 className="text-3xl font-black mb-2 text-cyber-orange">Evaluation Failed</h2>
              <p className="text-white/60 mb-8">{errorText}</p>
              <Link href="/" className="px-6 py-2 border border-cyber-orange text-cyber-orange rounded-full hover:bg-cyber-orange hover:text-black transition-all">Go Back</Link>
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

  return (
    <>
      <div className="bg-[#000a12] text-slate-100 font-sans selection:bg-cyber-cyan selection:text-[#000a12] overflow-x-hidden min-h-screen relative" style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(0, 245, 255, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(247, 127, 0, 0.08) 0%, transparent 40%),
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
      }}>

        {/* Futuristic Nav */}
        <header className="sticky top-0 z-[100] border-b border-white/5 bg-[#000a12]/80 backdrop-blur-xl">
          <div className="max-w-[1600px] mx-auto flex justify-between items-center px-8 py-4">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-orange p-[1px]">
                  <div className="w-full h-full bg-[#000a12] rounded-[7px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-cyber-cyan text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>AIG</span>
                  </div>
                </div>
                <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">PRD.AI</span>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.open(getExportPdfUrl(reportId))}
                className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all">Export_Report</button>
              <Link href="/" className="px-6 py-2.5 bg-white text-[#000a12] text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyber-cyan transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">New Analysis</Link>
            </div>
          </div>
        </header>

        <main className="max-w-[1600px] mx-auto px-8 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column (Hero & Feedback Cards) */}
            <div className="flex flex-col gap-6 lg:w-2/3">
              {/* Header & Main Score (Bento Cell) */}
              <div className="glass-bento rounded-[2rem] p-10 flex flex-col justify-between relative pb-16 min-h-[500px]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/10 blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-cyber-cyan/60 font-mono text-xs mb-4 uppercase tracking-[0.2em]">
                    <span className="material-symbols-outlined text-sm">fingerprint</span>
                    ID: {reportId}
                  </div>
                  <h1 className="text-7xl font-black tracking-tighter leading-none mb-4">
                    Analytical<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">Synthesis</span>
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between relative z-10 gap-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                       {finalScore >= 7 ? (
                           <span className="px-4 py-1.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-[10px] font-black uppercase tracking-widest border border-cyber-cyan/20">Architecturally Sound</span>
                       ) : (
                           <span className="px-4 py-1.5 rounded-full bg-cyber-orange/10 text-cyber-orange text-[10px] font-black uppercase tracking-widest border border-cyber-orange/20">Critical Attention Needed</span>
                       )}
                      <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest border border-white/5">Neural Verified</span>
                    </div>
                    <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                       {resultData?.verdict || 'PRD Analysis Complete.'}
                    </p>
                  </div>
                  <div className="text-left md:text-right group flex flex-col items-start md:items-end justify-end">
                    <div className="text-[10px] font-black text-cyber-cyan uppercase tracking-[0.3em] mb-2 mr-2">Core Index</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[8rem] md:text-[10rem] xl:text-[12rem] font-black tracking-tighter glow-text bg-clip-text text-transparent bg-gradient-to-b from-white to-cyber-cyan/40 leading-none pb-4">{finalScore}</span>
                      <span className="text-4xl font-light text-white/20">/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strengths & Weaknesses Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                {/* Strengths (Bento Cell) */}
                <div className="glass-bento rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-8xl">verified</span>
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyber-cyan mb-6">Neural Positives</h3>
                  <ul className="space-y-4 relative z-10">
                    {strengths.map((str: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-cyan mt-2 shadow-[0_0_8px_rgba(0,245,255,1)]"></div>
                          <p className="text-sm font-medium leading-relaxed text-white/80">{str}</p>
                        </li>
                    ))}
                    {strengths.length === 0 && <p className="text-white/20 text-xs text-center italic">No standout strengths identified.</p>}
                  </ul>
                </div>

                {/* Weaknesses (Bento Cell) */}
                <div className="glass-bento rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-cyber-orange">warning</span>
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyber-orange mb-6">Entropy Alerts</h3>
                  <ul className="space-y-4 relative z-10">
                    {weaknesses.map((weak: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-orange mt-2 shadow-[0_0_8px_rgba(247,127,0,1)]"></div>
                          <p className="text-sm font-medium leading-relaxed text-white/80">{weak}</p>
                        </li>
                    ))}
                    {weaknesses.length === 0 && <p className="text-white/20 text-xs text-center italic">No significant entropy detected.</p>}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Radar Focal Point */}
            <div className="lg:w-1/3 glass-bento rounded-[2rem] p-8 flex flex-col items-center justify-center relative neon-border min-h-[400px]">
              <h3 className="absolute top-8 left-8 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Multi-Axis Signal</h3>
              <div className="w-full aspect-square relative flex items-center justify-center max-w-[340px] mt-12 md:mt-0 xl:mt-8">
                <svg className="w-full h-full radar-glow opacity-80" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient cx="50%" cy="50%" id="grad1" r="50%">
                      <stop offset="0%" style={{ stopColor: "rgba(0, 245, 255, 0.2)", stopOpacity: 1 }}></stop>
                      <stop offset="100%" style={{ stopColor: "rgba(0, 245, 255, 0)", stopOpacity: 1 }}></stop>
                    </radialGradient>
                  </defs>
                  <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                  <circle cx="50" cy="50" fill="none" r="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                  <circle cx="50" cy="50" fill="none" r="15" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                  
                  {/* Dynamic Scaling approximation based on score */}
                  <polygon fill="url(#grad1)" points={`50,${15 - finalScore} ${80 + finalScore},${32 - finalScore} 80,70 50,88 15,68 22,28`} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></polygon>
                  <polygon fill="none" opacity="0.5" points={`50,${15 - finalScore} ${80 + finalScore},${32 - finalScore} 80,70 50,88 15,68 22,28`} stroke="#00f5ff" strokeWidth="0.5"></polygon>
                </svg>
                <div className="absolute top-0 text-[9px] font-bold text-cyber-cyan uppercase tracking-widest">Quality</div>
                <div className="absolute bottom-0 text-[9px] font-bold text-white/40 uppercase tracking-widest">Integration</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-bold text-white/40 uppercase tracking-widest">Values</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[9px] font-bold text-white/40 uppercase tracking-widest">Usability</div>
              </div>
              <div className="mt-8 gap-8 w-full">
                <div className="border-l border-cyber-cyan/40 pl-4 w-full text-center">
                    <p className="text-xs text-white/50">{resultData?.model_used || "N/A"}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Tokens: {resultData?.tokens_used || "..."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Evaluation List */}
          <section className="mt-12 space-y-6">
            {Object.entries(categories).map(([k, meta]: [string, any], index) => {
               if (meta.applicable === false) return null;
               const catScore = meta.score || 0;
               const isGood = catScore >= 7;
               const iconTheme = isGood ? 'text-cyber-cyan glow-cyan' : 'text-cyber-orange glow-orange';
               const borderTheme = isGood ? 'border-white/10' : 'border-cyber-orange/20';
               const fillOffset = 264 - (catScore/10 * 264);

               return (
                <div key={k} className={`glass-bento rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group ${borderTheme}`}>
                  <div className="w-full md:w-1/4 flex justify-center items-center relative">
                    <div className="relative w-40 h-40">
                      <svg className="donut-gauge w-full h-full" viewBox="0 0 100 100">
                        <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                        <circle className={iconTheme} cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset={fillOffset} strokeLinecap="round" strokeWidth="8"></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-black text-white leading-none">{catScore}</span>
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">/ 10</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`material-symbols-outlined ${isGood ? 'text-cyber-cyan' : 'text-cyber-orange'} text-2xl`}>analytics</span>
                      <h4 className="text-2xl font-black uppercase tracking-tight text-white/90">{k.replace("_", " ")}</h4>
                    </div>
                    <p className="text-base text-white/50 leading-relaxed mb-6">{meta.explanation}</p>
                    <div className={`bg-white/5 rounded-2xl p-4 border border-white/5 font-mono text-xs ${isGood ? 'text-cyber-cyan/70' : 'text-cyber-orange/70'} backdrop-blur-sm`}>
                      <span className="text-white/20 mr-2">EVIDENCE_LOG:</span> "{meta.evidence}"
                    </div>
                  </div>
                </div>
               );
            })}
          </section>

          {/* Roadmap Section */}
          <section className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black tracking-tight flex items-center gap-3 text-white/80">
                <span className="w-10 h-0.5 bg-gradient-to-r from-cyber-cyan to-transparent"></span>
                Improvement Roadmap
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Missing Nodes */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 ml-2">Missing Nodes</h3>
                {missingNodes.map((miss: string, index: number) => (
                    <div key={index} className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-orange">
                      <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-cyber-orange mt-1">error_med</span>
                        <div className="text-sm font-bold text-white/80 leading-relaxed">{miss}</div>
                      </div>
                    </div>
                ))}
                {missingNodes.length === 0 && <p className="text-white/40">No missing nodes detected.</p>}
              </div>

              {/* Smart Suggestions */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 ml-2">Optimizer Suggestions</h3>
                {improvementSugs.map((sug: string, index: number) => (
                    <div key={index} className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-cyan">
                      <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-cyber-cyan mt-1">bolt</span>
                        <div className="text-sm font-bold text-white/80 leading-relaxed">{sug}</div>
                      </div>
                    </div>
                ))}
                {improvementSugs.length === 0 && <p className="text-white/40">No optimization suggestions available.</p>}
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <button 
                onClick={() => window.open(getExportPdfUrl(reportId))}
                className="px-10 py-5 glass-bento rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              Download_PDF.sys
            </button>
            <Link href="/" className="px-12 py-5 bg-gradient-to-r from-cyber-cyan to-cyber-orange rounded-full text-[#000a12] text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,245,255,0.3)]">
              Analyze_New_PRD
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
