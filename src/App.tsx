import React, { useState, useEffect } from 'react';

type ModalState = 'auth' | 'scanner' | 'pricing' | 'payment' | null;
type ScanState = 'idle' | 'scanning' | 'results';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalState>(null);
  const [user, setUser] = useState<{ name: string; isPro: boolean } | null>(null);
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulated scanning delay
  useEffect(() => {
    if (scanState === 'scanning') {
      const timer = setTimeout(() => {
        setScanState('results');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [scanState]);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setUser({ name: user?.name || 'Pruthvi', isPro: true });
      setIsProcessing(false);
      setActiveModal('scanner'); // Go back to scanner to see unlocked results
    }, 1500);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-['Readex_Pro',sans-serif] antialiased">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Navbar */}
      <nav className="absolute z-20 px-6 md:px-10 pt-6 top-0 left-0 right-0 flex items-center justify-between gap-4">
        {/* Left Pill: Brand */}
        <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md rounded-full pl-4 pr-6 py-3 border border-white/10 shadow-lg">
          <svg viewBox="0 0 256 256" className="h-5 w-5 fill-white">
            <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
          </svg>
          <span className="text-white text-sm font-semibold tracking-tight">lucid ai</span>
        </div>

        {/* Center Pill: Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md rounded-full px-3 py-2 border border-white/10 shadow-lg">
          <button onClick={() => setActiveModal('scanner')} className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer">scanner</button>
          <button onClick={() => setActiveModal('pricing')} className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer">pricing</button>
          <button onClick={() => setActiveModal(null)} className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer">about</button>
        </div>

        {/* Right Pill: Auth / User Profile */}
        <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
          {!user ? (
            <>
              <button onClick={() => setActiveModal('auth')} className="text-neutral-300 hover:text-white text-sm px-4 py-2 transition-colors cursor-pointer">log in</button>
              <button onClick={() => setActiveModal('auth')} className="bg-white text-black text-sm font-medium rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors cursor-pointer">sign up</button>
            </>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1">
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
                {user.name.charAt(0)}
              </div>
              <span className="text-white text-sm pr-2">{user.name}</span>
              {user.isPro && <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Pro</span>}
            </div>
          )}
        </div>
      </nav>

      {/* Foreground Content (Hero) */}
      <div className="relative h-full w-full pointer-events-none">
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] tracking-tighter leading-[0.95] left-4 md:left-10 top-[18%] drop-shadow-2xl">don't</h1>
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] tracking-tighter leading-[0.95] right-4 md:right-10 top-[38%] drop-shadow-2xl">sign</h1>
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] tracking-tighter leading-[0.95] left-[18%] md:left-[28%] top-[58%] drop-shadow-2xl">blindly</h1>

        <div className="absolute left-6 md:left-10 top-[46%] max-w-[280px] md:max-w-[320px]">
          <p className="text-[15px] md:text-[17px] leading-relaxed text-white/90 font-light backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/10">
            lucid ai translates complex legal jargon into plain english. instantly flag hidden traps, benchmark terms against market standards, and negotiate with absolute clarity.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* MODALS OVERLAY */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          
          {/* Auth Modal */}
          {activeModal === 'auth' && (
            <div className="bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center gap-4 relative shadow-2xl">
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition text-xl">&times;</button>
              <h2 className="text-white text-xl font-medium mb-4">welcome to lucid ai</h2>
              <button 
                onClick={() => { setUser({ name: 'Pruthvi', isPro: false }); setActiveModal(null); }}
                className="bg-white text-black w-full rounded-full py-3 text-sm font-medium flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                continue with google
              </button>
              <button className="bg-transparent border border-white/20 text-white w-full rounded-full py-3 text-sm font-medium hover:bg-white/10 transition-colors">
                continue with email
              </button>
            </div>
          )}

          {/* Pricing Modal */}
          {activeModal === 'pricing' && (
            <div className="bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-3xl relative shadow-2xl">
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition text-xl">&times;</button>
              <h2 className="text-white text-2xl font-medium mb-8 text-center">transparent pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/50 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white text-xl font-medium">basic</h3>
                  <div className="text-white text-3xl font-light mt-2 mb-6">₹0</div>
                  <ul className="text-white/70 text-sm space-y-3">
                    <li className="flex items-center gap-2">✓ 1 contract scan per month</li>
                    <li className="flex items-center gap-2">✓ plain english translation</li>
                    <li className="flex items-center gap-2">✓ basic red flag alerts</li>
                  </ul>
                </div>
                <div className="bg-black/80 rounded-2xl p-6 border border-indigo-500/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">most popular</div>
                  <h3 className="text-white text-xl font-medium">lucid pro</h3>
                  <div className="text-white text-3xl font-light mt-2 mb-6">₹199 <span className="text-sm text-white/50">/ month</span></div>
                  <ul className="text-white/90 text-sm space-y-3">
                    <li className="flex items-center gap-2 text-indigo-300">✓ unlimited scans</li>
                    <li className="flex items-center gap-2 text-indigo-300">✓ market benchmarking data</li>
                    <li className="flex items-center gap-2 text-indigo-300">✓ ai negotiation email templates</li>
                    <li className="flex items-center gap-2 text-indigo-300">✓ priority processing</li>
                  </ul>
                  {!user?.isPro && (
                    <button onClick={() => setActiveModal('payment')} className="w-full mt-6 bg-white text-black font-medium py-2 rounded-full hover:bg-neutral-200 transition">upgrade now</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Scanner Modal */}
          {activeModal === 'scanner' && (
            <div className={`bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full transition-all duration-500 ${scanState === 'results' ? 'max-w-4xl' : 'max-w-lg'} relative shadow-2xl overflow-hidden`}>
              <button onClick={() => { setActiveModal(null); setScanState('idle'); }} className="absolute top-4 right-4 text-white/50 hover:text-white transition text-xl z-10">&times;</button>
              
              {scanState === 'idle' && (
                <div className="text-center animate-in fade-in">
                  <h2 className="text-white text-xl font-medium mb-2">upload contract</h2>
                  <p className="text-white/50 text-sm mb-6">we support job offers, ndas, and leases</p>
                  <div 
                    onClick={() => user ? setScanState('scanning') : setActiveModal('auth')}
                    className="border-2 border-dashed border-white/20 rounded-2xl p-12 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 group"
                  >
                    <svg className="w-8 h-8 text-white/50 group-hover:text-indigo-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <span className="text-white text-sm font-medium">drag and drop your pdf here</span>
                  </div>
                  <p className="text-white/40 text-xs mt-4">secure & private. max file size 10mb.</p>
                </div>
              )}

              {scanState === 'scanning' && (
                <div className="flex flex-col items-center justify-center h-64 gap-6 animate-in fade-in">
                  <div className="w-16 h-16 border-4 border-white/10 border-t-indigo-500 rounded-full animate-spin"></div>
                  <div className="text-center">
                    <h3 className="text-white text-lg font-medium">analyzing contract...</h3>
                    <p className="text-indigo-400 text-sm mt-1 animate-pulse">extracting legal clauses & benchmarking...</p>
                  </div>
                </div>
              )}

              {scanState === 'results' && (
                <div className="animate-in fade-in duration-500 text-left">
                  <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-white/50 text-xs font-mono mb-1">file: software_engineer_offer.pdf</p>
                      <h2 className="text-white text-2xl font-medium">analysis complete</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">fairness score</p>
                      <p className="text-orange-400 text-2xl font-bold">62<span className="text-sm text-white/50 font-normal">/100</span></p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 relative">
                    {/* Free Translation Side */}
                    <div className="bg-black/40 rounded-xl p-5 border border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <h3 className="text-white font-medium">critical flag: 90-day notice period</h3>
                      </div>
                      <p className="text-white/40 text-xs font-mono mb-2">original text:</p>
                      <div className="bg-black/60 p-3 rounded text-white/60 text-xs font-mono mb-4 border border-white/5">
                        "Employee must provide 90 days written notice prior to resignation. Company may terminate this agreement immediately without cause..."
                      </div>
                      <p className="text-white/40 text-xs font-mono mb-1">plain english translation:</p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        you are locked in for 3 months if you want to quit to join another company, but they can fire you instantly with zero notice. this is completely one-sided.
                      </p>
                    </div>

                    {/* PRO Side (Paywall or Unlocked) */}
                    <div className="relative h-full min-h-[250px] rounded-xl overflow-hidden border border-indigo-500/30">
                      
                      {!user?.isPro ? (
                        // PAYWALL
                        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10">
                          <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                          </div>
                          <h4 className="text-white font-medium mb-2">unlock pro insights</h4>
                          <p className="text-white/60 text-xs mb-6">see market benchmarks and generate ai negotiation emails.</p>
                          <button 
                            onClick={() => setActiveModal('payment')}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2.5 px-6 rounded-full transition shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                          >
                            upgrade for ₹199
                          </button>
                        </div>
                      ) : (
                        // UNLOCKED CONTENT
                        <div className="absolute inset-0 bg-indigo-950/30 p-5 flex flex-col animate-in fade-in">
                          <h4 className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            market benchmark
                          </h4>
                          <p className="text-white text-sm mb-4">
                            <span className="text-red-400 font-bold">highly abnormal.</span> standard notice periods for junior software engineers are 30 days. 90 days severely restricts future career moves.
                          </p>
                          
                          <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 mt-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            ai negotiation email
                          </h4>
                          <div className="bg-black/50 p-3 rounded-lg border border-emerald-500/20">
                            <p className="text-white/80 text-xs font-mono leading-relaxed">
                              "hi HR team, i am thrilled about the offer. regarding the 90-day notice period, based on industry standards for this role, 30 days is typical. could we amend this clause to a standard 30-day period?"
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Payment Modal */}
          {activeModal === 'payment' && (
            <div className="bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-sm relative shadow-2xl text-center">
              <button onClick={() => {setActiveModal('scanner'); setScanState('results');}} className="absolute top-4 left-4 text-white/50 hover:text-white transition text-sm flex items-center gap-1">← back</button>
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition text-xl">&times;</button>
              
              <h2 className="text-white text-xl font-medium mt-4 mb-1">upgrade to lucid pro</h2>
              <p className="text-white/50 text-sm mb-6">unlock unlimited scans and insights</p>
              
              <div className="text-3xl text-white font-light mb-6">₹199</div>
              
              <div className="space-y-3 mb-6">
                <input type="text" placeholder="card number (fake demo)" className="w-full bg-black/50 border border-white/20 rounded-xl p-3 text-white text-sm outline-none focus:border-indigo-500 transition placeholder:text-white/30" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="mm/yy" className="w-full bg-black/50 border border-white/20 rounded-xl p-3 text-white text-sm outline-none focus:border-indigo-500 transition placeholder:text-white/30" />
                  <input type="text" placeholder="cvc" className="w-full bg-black/50 border border-white/20 rounded-xl p-3 text-white text-sm outline-none focus:border-indigo-500 transition placeholder:text-white/30" />
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 text-white w-full rounded-full py-3 text-sm font-medium transition shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> processing...</>
                ) : 'pay securely'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}