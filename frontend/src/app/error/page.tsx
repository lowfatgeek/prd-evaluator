'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <div className="bg-surface text-on-surface font-sans selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col overflow-x-hidden">
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-[#001523]/70 backdrop-blur-xl font-sans antialiased tracking-tight shadow-[0_40px_40px_0_rgba(2,75,115,0.08)]">
          <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
            <div className="text-xl font-semibold tracking-tighter text-[#cae6ff]">PRDmetrix</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-[#dec1af] hover:text-[#cae6ff] transition-colors" href="/">Dashboard</Link>
              <Link className="text-[#dec1af] hover:text-[#cae6ff] transition-colors" href="/result/123">Evaluations</Link>
              <Link className="text-[#dec1af] hover:text-[#cae6ff] transition-colors" href="#">Drafts</Link>
              <Link className="text-[#dec1af] hover:text-[#cae6ff] transition-colors" href="#">Settings</Link>
            </div>
            <div className="flex items-center space-x-6">
              <button className="bg-primary-container text-on-primary px-5 py-2 rounded-lg font-semibold text-sm hover:brightness-110 active:scale-95 duration-200 transition-all">
                New PRD
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp8_CqN2OWqt8guS9R41g9u8Hcvou5NuF8awMUUwV07bKrh_uz2oQ1BFcWLEdNT5pX0htLTRtSHy4SxaDEX40eg_bvpftsTpNwVoulbWNk_tWimbfBDTIF93QHoH8a2NijHR5hgraQknPvmcDyHYAsLa0iGhWdWBwmWmWWb7QwFFPlvOIW0TXtr1uKpnW1NdcdbA_8c98XtiyRgnQHCoCdCln6vLL9ez0nzSAOJlWnqcDtNGwcLR9d9yZ0afmvwe7ReoBkU4KKVbU"/>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Canvas */}
        <main className="flex-grow flex items-center justify-center relative pt-20 pb-12 px-4 micro-grid">
          {/* Background Radial Anomaly Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--tw-colors-crimson-glow)]/10 blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(214, 40, 40, 0.1)' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--tw-colors-crimson-glow)]/20 blur-[80px] rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(214, 40, 40, 0.2)' }}></div>
          
          {/* Central Module: Glass Bento Pane */}
          <div className="relative w-full max-w-4xl z-10">
            <div className="bg-surface-container-highest/40 backdrop-blur-2xl border border-crimson-glow/40 rounded-[24px] p-12 glitch-border overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crimson-glow/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <span className="text-[120px] font-black tracking-tighter select-none">404</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Icon Section */}
                <div className="relative">
                  <div className="absolute inset-0 bg-crimson-glow/20 blur-xl rounded-full scale-150"></div>
                  <div className="relative flex items-center justify-center w-24 h-24 bg-surface-container-lowest border border-crimson-glow/60 rounded-2xl">
                    <span className="material-symbols-outlined text-crimson-glow text-6xl" style={{ fontVariationSettings: "'FILL' 0" }}>warning</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface uppercase">
                    SYSTEM ANOMALY
                  </h1>
                  <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
                    Document Analysis Failed. The uploaded PRD contains insufficient text for the AI to process (Minimum 200 characters).
                  </p>
                </div>

                {/* Action Cluster */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 relative z-20">
                  <Link href="/" className="group relative px-10 py-4 bg-primary-container text-on-primary rounded-lg font-bold text-lg transition-all active:scale-95 shadow-[0_0_30px_rgba(247,127,0,0.3)] hover:shadow-[0_0_50px_rgba(247,127,0,0.5)]">
                    Retry Upload
                    <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="/" className="px-10 py-4 border border-outline-variant/30 text-on-surface-variant rounded-lg font-semibold text-lg hover:bg-surface-variant/50 hover:text-on-surface transition-all duration-300">
                    Return to Home
                  </Link>
                </div>

                {/* Metadata / Technical Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-12 pt-12 border-t border-outline-variant/10 relative z-20">
                  <div className="text-left">
                    <span className="block text-[10px] text-on-surface-variant/60 tracking-widest uppercase font-bold mb-1">Error Code</span>
                    <span className="text-sm font-mono text-secondary">ERR_LEN_MIN_200</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-on-surface-variant/60 tracking-widest uppercase font-bold mb-1">Module</span>
                    <span className="text-sm font-mono text-secondary">LINGUISTIC_V3</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-on-surface-variant/60 tracking-widest uppercase font-bold mb-1">State</span>
                    <span className="text-sm font-mono text-crimson-glow font-bold">HALTED</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-on-surface-variant/60 tracking-widest uppercase font-bold mb-1">Trace ID</span>
                    <span className="text-sm font-mono text-secondary">8829-OX-99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Component */}
        <footer className="w-full border-t border-[#574335]/15 bg-[#001523] text-sm font-sans tracking-widest relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-screen-2xl mx-auto">
            <div className="mb-8 md:mb-0">
              <div className="text-lg font-bold text-[#cae6ff] mb-2 uppercase tracking-tighter">PRDmetrix</div>
              <div className="text-[#dec1af] normal-case tracking-normal">© 2024 PRDmetrix. Precision in PRD Engineering.</div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a className="text-[#dec1af] hover:text-[#f77f00] transition-colors uppercase font-bold text-xs" href="#">Documentation</a>
              <a className="text-[#dec1af] hover:text-[#f77f00] transition-colors uppercase font-bold text-xs" href="#">Privacy Policy</a>
              <Link className="text-[#dec1af] hover:text-[#f77f00] transition-colors uppercase font-bold text-xs" href="/terms">Terms of Service</Link>
              <a className="text-[#dec1af] hover:text-[#f77f00] transition-colors uppercase font-bold text-xs" href="#">Security</a>
              <a className="text-[#dec1af] hover:text-[#f77f00] transition-colors uppercase font-bold text-xs" href="#">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
