import { useState } from 'react';

type ModalType = 'auth' | 'scanner' | 'pricing' | null;

function Hero() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Navbar */}
      <nav className="absolute z-20 px-6 md:px-10 pt-6 top-0 left-0 right-0">
        <div className="flex items-center justify-between gap-4">
          {/* Left pill — logo + brand */}
          <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
              <path d="m20 20-4.35-4.35" />
              <path d="M7.5 6h5v4h-5z" />
              <path d="M8.5 7h3v2h-3z" />
            </svg>
            <span className="text-white text-sm font-semibold tracking-tight">
              Lucid AI
            </span>
          </div>

          {/* Center pill — nav links */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
            <a
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
              onClick={() => setActiveModal('scanner')}
            >
              scanner
            </a>
            <a
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
              onClick={() => setActiveModal('pricing')}
            >
              pricing
            </a>
            <a
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
              onClick={() => setActiveModal(null)}
            >
              about
            </a>
          </div>

          {/* Right pill — auth */}
          <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full p-1">
            <a
              className="text-neutral-300 hover:text-white text-sm px-4 py-2 transition-colors cursor-pointer"
              onClick={() => setActiveModal('auth')}
            >
              log in
            </a>
            <button
              className="bg-white text-black text-sm font-medium rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors cursor-pointer"
              onClick={() => setActiveModal('auth')}
            >
              sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Foreground content */}
      <div className="relative h-full w-full">
        {/* Staggered headline words */}
        <span className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]">
          don't
        </span>
        <span className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%]">
          sign
        </span>
        <span className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]">
          blindly
        </span>

        {/* Description block */}
        <p className="absolute bottom-12 left-6 md:bottom-20 md:left-10 max-w-[450px] text-[16px] md:text-[18px] leading-relaxed text-white/80 font-light">
          lucid ai translates complex legal jargon into plain english. instantly
          flag hidden traps, benchmark terms against market standards, and
          negotiate with absolute clarity.
        </p>
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

      {/* Modal overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
          {/* Auth modal */}
          {activeModal === 'auth' && (
            <div className="relative bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center gap-4">
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                onClick={() => setActiveModal(null)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-white text-xl font-medium">welcome to securify</h2>
              <button className="bg-white text-black w-full rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer">
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
                  />
                </svg>
                continue with google
              </button>
              <button className="bg-transparent border border-white/20 text-white w-full rounded-full py-3 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
                continue with email
              </button>
            </div>
          )}

          {/* Scanner modal */}
          {activeModal === 'scanner' && (
            <div className="relative bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-lg text-center">
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                onClick={() => setActiveModal(null)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-white text-xl font-medium mb-2">upload contract</h2>
              <p className="text-white/70 text-sm mb-6">
                we support job offers, ndas, and leases
              </p>
              <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 hover:border-white/50 hover:bg-white/5 transition-all cursor-pointer flex flex-col items-center justify-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M17 8l-5-5-5 5" />
                  <path d="M12 3v12" />
                </svg>
                <span className="text-white text-sm">drag and drop your pdf here</span>
              </div>
              <p className="text-white/40 text-xs mt-4">
                secure & private. max file size 10mb.
              </p>
            </div>
          )}

          {/* Pricing modal */}
          {activeModal === 'pricing' && (
            <div className="relative bg-neutral-900/90 border border-white/10 rounded-3xl p-8 w-full max-w-3xl">
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                onClick={() => setActiveModal(null)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-white text-2xl font-medium mb-6 text-center">
                transparent pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Free card */}
                <div className="bg-black/50 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white text-lg font-medium mb-1">basic</h3>
                  <p className="text-white text-3xl font-semibold mb-4">₹0</p>
                  <ul className="flex flex-col gap-3">
                    {[
                      '1 contract scan per month',
                      'plain english translation',
                      'basic red flag alerts',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pro card */}
                <div className="bg-black/80 rounded-2xl p-6 border border-white/30 relative overflow-hidden">
                  <span className="absolute top-4 right-4 bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                    most popular
                  </span>
                  <h3 className="text-white text-lg font-medium mb-1">lucid pro</h3>
                  <p className="text-white text-3xl font-semibold mb-4">₹199 / month</p>
                  <ul className="flex flex-col gap-3">
                    {[
                      'unlimited scans',
                      'market benchmarking data',
                      'ai negotiation email templates',
                      'priority processing',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Hero;
