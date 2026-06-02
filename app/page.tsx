"use client";

import { motion } from "framer-motion";
import ParticleField from "@/components/particle-field";

// Clean, simple description text for your bio
const narrativeRows = [
  "I am a second-year student at the University of the Western Cape (UWC), studying Mathematics, Statistics, and Computer Science.",
  "I enjoy working with data, finding trends in numbers, and building clean web layouts that make information easy for anyone to read.",
  "This portfolio is my personal workspace where I track my progress, showcase my university practicals, and share my coding projects.",
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-[#daffde]">
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-6">
            
            {/* Top Intro Section with Split Grid for Picture */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-[2.5rem] border border-[#deff9a]/20 bg-black/60 p-6 backdrop-blur-md"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                
                {/* Left Column: Text & Meta Content (Slightly wider to shift space right) */}
                <div className="lg:col-span-9">
                  <div className="flex flex-wrap items-center gap-4 border-b border-neutral-800 pb-4">
                    <p className="inline-flex rounded-full border border-[#deff9a]/30 bg-[#deff9a]/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#deff9a]">
                      [ QUANTITATIVE STUDENT / DATA SCIENCE ENTHUSIAST ]
                    </p>
                    <span className="rounded-full bg-[#daffde]/5 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#daffde]/60">
                      UWC - Maths & Stats
                    </span>
                  </div>

                  <div className="mt-6">
                    <h1 className="text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                      Tidimatso Malatji
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#daffde]/80 sm:text-lg">
                      Welcome to my portfolio. I build clean, simple layouts to display my university work, data projects, and coding skills.
                    </p>
                  </div>

                  {/* Verified Tool Stack Chips */}
                  <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-[#daffde]/70 font-mono">
                    {['Python', 'Java', 'SAS', 'R Programming', 'Statistics'].map((chip) => (
                      <span key={chip} className="rounded-full border border-[#deff9a]/20 bg-white/5 px-3 py-1.5 transition-all duration-300 hover:border-[#deff9a]/50 hover:text-white">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Profile Picture Frame (Larger and pushed right) */}
                <div className="lg:col-span-3 flex justify-center lg:justify-end lg:pl-4">
                  <div className="relative group aspect-[4/5] w-full max-w-[280px] rounded-[2rem] border border-[#deff9a]/20 bg-black/40 p-3 transition-all duration-300 hover:border-[#deff9a]/40">
                    <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-neutral-900 border border-neutral-800 relative">
                      
                      <img 
                        src="/Folding arms.jpeg" 
                        alt="Tidimatso Malatji" 
                        className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallbackNode = document.getElementById('image-error-fallback');
                          if (fallbackNode) fallbackNode.style.display = 'flex';
                        }}
                      />

                      {/* Fallback Display UI */}
                      <div 
                        id="image-error-fallback"
                        className="absolute inset-0 hidden flex-col items-center justify-center p-4 text-center font-mono text-[9px] uppercase tracking-widest text-neutral-500 bg-white/[0.02]"
                      >
                        <svg className="w-5 h-5 mb-2 text-[#deff9a]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>[ PHOTO LOAD ERROR ]</span>
                        <span className="text-[8px] text-neutral-600 mt-1">Check file extension spacing</span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* About Me / Persona Section */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.9, ease: "easeOut" }}
              className="rounded-[2.5rem] border border-[#deff9a]/20 bg-neutral-950/70 p-6 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">MY PROFILE SUMMARY</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Who I Am</p>
                </div>
                <span className="rounded-full bg-[#deff9a]/10 px-2 py-1 text-[9px] font-semibold text-[#deff9a]">OVERVIEW</span>
              </div>

              <div className="mt-5 space-y-4 text-base leading-8 text-[#daffde]/80">
                {narrativeRows.map((row) => (
                  <p key={row} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {row}
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t border-neutral-800 pt-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#deff9a]">Core Focus</p>
                <p className="mt-3 font-mono text-sm leading-6 text-[#daffde]">
                  I focus on writing accurate code, creating easy-to-read data charts, and designing interfaces that make complex information look completely clear.
                </p>
              </div>
            </motion.article>

          </div>
        </section>
      </div>
    </main>
  );
}