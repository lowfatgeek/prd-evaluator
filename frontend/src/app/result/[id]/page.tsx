'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ResultPage() {
  const params = useParams();
  const reportId = params?.id || 'TEST-123';

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
              <nav className="hidden lg:flex gap-10 items-center">
                <a className="text-sm font-medium text-white/40 hover:text-cyber-cyan transition-colors" href="#">Terminal</a>
                <a className="text-sm font-medium text-cyber-cyan flex items-center gap-2" href="#">
                  <span className="w-1 h-1 rounded-full bg-cyber-cyan"></span>Archive
                </a>
                <a className="text-sm font-medium text-white/40 hover:text-cyber-cyan transition-colors" href="#">Neural Net</a>
                <a className="text-sm font-medium text-white/40 hover:text-cyber-cyan transition-colors" href="#">Configuration</a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all">Export_Report</button>
              <Link href="/" className="px-6 py-2.5 bg-white text-[#000a12] text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyber-cyan transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">New Analysis</Link>
              <div className="w-10 h-10 rounded-full border border-white/10 p-0.5">
                <img alt="User" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJQ34Z7IGMOpGHqbxYI75ywR2AI2n4iXFBDdLd0jhuF48dkZ9PPZ-9D5OwSfwSP3bu-zOlJOiOECbSHoMOWKqzkZ3Cjjcso5qztovFcadiu7j5XlvPy5wZWL1gqfnR8oeRt0uyxcvCu3iJaUjr_07GrRDkHNXIm1ZXwThJE0ioitue_NvDpFuvRARTchTyeooWF8Q6TEzET_grjcGc6dM0rlOqk2s_r7e7oqHEPye5RMxZxBTbwxXfDOb0lSvGtP1CD4pgst-q_bk"/>
              </div>
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
                      <span className="px-4 py-1.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-[10px] font-black uppercase tracking-widest border border-cyber-cyan/20">Architecturally Sound</span>
                      <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest border border-white/5">Neural Verified</span>
                    </div>
                    <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                      PRD analysis complete. Structural integrity meets Tier 1 enterprise standards with localized anomalies in logistics logic.
                    </p>
                  </div>
                  <div className="text-left md:text-right group flex flex-col items-start md:items-end justify-end">
                    <div className="text-[10px] font-black text-cyber-cyan uppercase tracking-[0.3em] mb-2 mr-2">Core Index</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[8rem] md:text-[10rem] xl:text-[12rem] font-black tracking-tighter glow-text bg-clip-text text-transparent bg-gradient-to-b from-white to-cyber-cyan/40 leading-none pb-4">7.8</span>
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
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-cyan mt-2 shadow-[0_0_8px_rgba(0,245,255,1)]"></div>
                      <p className="text-sm font-medium leading-relaxed text-white/80">Robust technical definition for API rate limiting and edge cases.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-cyan mt-2 shadow-[0_0_8px_rgba(0,245,255,1)]"></div>
                      <p className="text-sm font-medium leading-relaxed text-white/80">Exceptional user persona mapping for the &apos;Enterprise Buyer&apos; journey.</p>
                    </li>
                  </ul>
                </div>

                {/* Weaknesses (Bento Cell) */}
                <div className="glass-bento rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-cyber-orange">warning</span>
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyber-orange mb-6">Entropy Alerts</h3>
                  <ul className="space-y-4 relative z-10">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-orange mt-2 shadow-[0_0_8px_rgba(247,127,0,1)]"></div>
                      <p className="text-sm font-medium leading-relaxed text-white/80">Vague data retention policy for GDPR compliance under Section 4.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyber-orange mt-2 shadow-[0_0_8px_rgba(247,127,0,1)]"></div>
                      <p className="text-sm font-medium leading-relaxed text-white/80">Missing &apos;Success Metrics&apos; for the checkout conversion funnel.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Radar Focal Point (Bento Cell) */}
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
                  <polygon fill="url(#grad1)" points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></polygon>
                  <polygon fill="rgba(247,127,0,0.15)" points="50,15 88,32 80,70 50,88 15,68 22,28" stroke="#f77f00" strokeLinejoin="round" strokeWidth="1.5"></polygon>
                  <polygon fill="none" opacity="0.5" points="50,15 88,32 80,70 50,88 15,68 22,28" stroke="#00f5ff" strokeWidth="0.5" transform="scale(1.1) translate(-4.5, -4.5)"></polygon>
                </svg>
                <div className="absolute top-0 text-[9px] font-bold text-cyber-cyan uppercase tracking-widest">Scalability</div>
                <div className="absolute bottom-0 text-[9px] font-bold text-white/40 uppercase tracking-widest">Security</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-bold text-white/40 uppercase tracking-widest">Clarity</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[9px] font-bold text-white/40 uppercase tracking-widest">Viability</div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                <div className="border-l border-cyber-orange/40 pl-4">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Architecture</div>
                  <div className="text-lg font-bold text-cyber-orange">High Flow</div>
                </div>
                <div className="border-l border-cyber-cyan/40 pl-4">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Redundancy</div>
                  <div className="text-lg font-bold text-cyber-cyan">92.4%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Evaluation List */}
          <section className="mt-12 space-y-6">
            {/* Cat 1 */}
            <div className="glass-bento rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group border-white/10">
              <div className="w-full md:w-1/4 flex justify-center items-center relative">
                <div className="relative w-40 h-40">
                  <svg className="donut-gauge w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-cyber-cyan glow-cyan" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="26.4" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white leading-none">09</span>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">/ 10</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-cyber-cyan text-2xl">blur_on</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white/90">Value Prop</h4>
                </div>
                <p className="text-base text-white/50 leading-relaxed mb-6">The problem statement is articulated with high precision, addressing specific pain points in the existing checkout workflow.</p>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 font-mono text-xs text-cyber-cyan/70 backdrop-blur-sm">
                  <span className="text-white/20 mr-2">EVIDENCE_LOG:</span> "Reduce abandonment by 15% via headless gateway implementation and edge-cached state management."
                </div>
              </div>
            </div>

            {/* Cat 2 */}
            <div className="glass-bento rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group border-cyber-orange/20">
              <div className="w-full md:w-1/4 flex justify-center items-center relative">
                <div className="relative w-40 h-40">
                  <svg className="donut-gauge w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-cyber-orange glow-orange" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="158.4" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white leading-none">04</span>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">/ 10</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-cyber-orange text-2xl">hub</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white/90">Scalability</h4>
                </div>
                <p className="text-base text-white/50 leading-relaxed mb-6">Significant ambiguity in load balancing strategy and database sharding protocols for peak traffic periods.</p>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 font-mono text-xs text-cyber-orange/70 backdrop-blur-sm">
                  <span className="text-white/20 mr-2">EVIDENCE_LOG:</span> "Handle users without significant lag..." — Lacks technical SLAs or specific hardware acceleration requirements.
                </div>
              </div>
            </div>
            
            {/* Cat 3 */}
            <div className="glass-bento rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group border-white/10">
              <div className="w-full md:w-1/4 flex justify-center items-center relative">
                <div className="relative w-40 h-40">
                  <svg className="donut-gauge w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-white/60" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="79.2" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white leading-none">07</span>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">/ 10</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-white/40 text-2xl">encrypted</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white/90">Data Privacy</h4>
                </div>
                <p className="text-base text-white/50 leading-relaxed mb-6">Good SOC2 mention and encryption standards, though it lacks specific EU localization details for GDRP compliance.</p>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 font-mono text-xs text-white/40 backdrop-blur-sm">
                  <span className="text-white/20 mr-2">EVIDENCE_LOG:</span> "Sensitive data encrypted at rest AES-256 with key rotation every 90 days via KMS."
                </div>
              </div>
            </div>
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
                <div className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-orange">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-cyber-orange mt-1">error_med</span>
                    <div>
                      <div className="font-bold text-sm mb-1">Post-Launch Support Plan</div>
                      <div className="text-xs text-white/40 leading-relaxed">Critical gap. PRD terminates at deployment. No V1.1 maintenance or triage strategy identified.</div>
                    </div>
                  </div>
                </div>
                <div className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-orange">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-cyber-orange mt-1">wifi_off</span>
                    <div>
                      <div className="font-bold text-sm mb-1">Edge Case Mapping</div>
                      <div className="text-xs text-white/40 leading-relaxed">No definitions for offline latency or low-bandwidth states for mobile endpoints.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Suggestions */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 ml-2">Optimizer Suggestions</h3>
                <div className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-cyan">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-cyber-cyan mt-1">bolt</span>
                    <div>
                      <div className="font-bold text-sm mb-1">Quantify Performance</div>
                      <div className="text-xs text-white/40 leading-relaxed">Replace "fast loading" with "LCP under 1.2s on 4G networks" to ensure measurable SLAs.</div>
                    </div>
                  </div>
                </div>
                <div className="glass-bento rounded-2xl p-6 border-l-2 border-cyber-cyan">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-cyber-cyan mt-1">groups</span>
                    <div>
                      <div className="font-bold text-sm mb-1">Clarify Stakeholders</div>
                      <div className="text-xs text-white/40 leading-relaxed">Explicitly identify 'Legal' as a primary validator for Section 4 data governance.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-5 glass-bento rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              Download_PDF.sys
            </button>
            <Link href="/" className="px-12 py-5 bg-gradient-to-r from-cyber-cyan to-cyber-orange rounded-full text-[#000a12] text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,245,255,0.3)]">
              Analyze_New_PRD
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 bg-[#000a12]/80 backdrop-blur-xl relative z-10">
          <div className="max-w-[1600px] mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-widest text-white/20 uppercase">PRD.AI ARCHITECT</span>
            </div>
            <div className="flex gap-10">
              <a className="text-xs font-bold text-white/20 hover:text-cyber-cyan transition-colors" href="#">Manifesto</a>
              <a className="text-xs font-bold text-white/20 hover:text-cyber-cyan transition-colors" href="#">Security_Log</a>
              <a className="text-xs font-bold text-white/20 hover:text-cyber-cyan transition-colors" href="#">API_Key</a>
            </div>
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest">© 2026 NEURAL ARCHITECT. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
