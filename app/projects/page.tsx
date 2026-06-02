"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hackathons = [
  {
    title: "GovSync",
    date: "March 2026",
    buildType: "COLLABORATION BUILD",
    award: null,
    images: [
      "/govsync-Home-page.jpeg", 
      "/govsync-Dashboard.jpeg", 
      "/govsync-Report-issue.jpeg",
      "/govsync-AI-Analysis.jpeg",
      "/govsync-Subscription.jpeg",
      "/govsync-Poster.jpeg",
      "/govsync-Poster-2.jpeg",
      "/govsync-Team.jpeg",
      "/govsync-Team-in-motion.jpeg",
      "/govsync-Logo-and-slogan.png"
    ], 
    description: "A full-stack Vite, React, and TypeScript AI platform optimized for municipal infrastructure management. Engineered with a Python API backend executing automated computer vision routing via GitHub Models inference logic (openai/o4-mini) to instantly classify multi-channel incident photos. Features predictive queue algorithms, a responsive cross-platform mobile web layout, and dynamic operational monitoring dashboards anchored to an extensible database layer.",
    repoUrl: "https://github.com/Sange566/govsync-ai-helper",
  },
  {
    title: "Revenue Linked Recruitment",
    date: "April 2026",
    buildType: "COLLABORATION BUILD",
    award: null,
    images: [
      "/revenuelinked-patient-registry.jpeg",
      "/revenuelinked-patient-registry-2.jpeg",
      "/revenuelinked-file-claim.jpeg",
      "/revenuelinked-submission-in-progress.jpeg",
      "/revenuelinked-revenue-summary.jpeg",
      "/revenuelinked-team.jpeg",
      "/revenuelinked-me.jpeg"
    ],
    description: "An automated clinical intelligence pipeline designed to capture billions in unrecovered medical aid revenue by parsing raw clinical notes into precise ICD-10 operational codes within 5 seconds. The platform leverages a unique 90/10 financial split optimization model, empowering local hospital wards to directly self-fund and hire unemployed medical practitioners independently of external state budgeting constraints.",
    repoUrl: "https://github.com/tidimatsomalatji341-boop/Revenue-Linked-Recruitment",
  },
  {
    title: "GreenGuard",
    date: "May 2026",
    buildType: "COLLABORATION BUILD",
    award: "🏆 2nd Place Winner",
    images: [
      "/green-intro.jpeg",
      "/green-setup.jpeg",
      "/green-showcase.jpeg",
      "/green-in-progress.jpeg",
      "/green-in-progress-2.jpeg",
      "/green-poster.jpeg",
      "/green-posters.jpeg",
      "/green-team.jpeg",
      "/green-team-2.jpeg",
      "/green-me-1.jpeg",
      "/green-me-2.jpeg",
      "/green-me-3.jpeg",
      "/green-me-and-minister.jpeg",
      "/green-me-and-minister-2.jpeg"
    ],
    description: "A real-time IoT agri-tech monitoring ecosystem engineered for South African small-scale farmers. Features a multi-threaded Python backend processing active sensor telemetry (soil moisture, gas, flame, humidity) streamed via MQTT from remote ESP32 MicroPython devices. Implemented an asynchronous SQLite persistence pipeline, continuous 3-reading algorithmic debounce layers to insulate against solar noise false-positives, an automated firmware deployment interface over BLE/WebREPL, and a localized 5-language knowledge engine translating traditional Ubuntu farming indicators.",
    repoUrl: "https://github.com/Vhutali01/GreenGuard",
  }
];

const personalProjects = [
  {
    title: "FUTURE DS 01",
    date: "April 19, 2026",
    buildType: "SOLO BUILD",
    // Mapped exactly to your newly uploaded data science files
    images: [
      "/future-1.png",
      "/future-2.png",
      "/future-3.png",
      "/future-4.png",
      "/future-5.png",
      "/future-6.png"
    ],
    description: "A data science pipeline engineered using Pandas, Seaborn, and Matplotlib to parse and audit commercial dataset indices. Implements customized split-aggregation matrices to map geographic and item metrics, isolate structural sub-category margin leakages, and track operational velocity. Designed regression plotting matrices and distribution charts to isolate and visually audit how promotional discount scaling dynamics mathematically impact baseline category profitability profiles.",
    repoUrl: "https://github.com/tidimatsomalatji341-boop/FUTURE_DS_01",
  }
];

export default function ProjectsPage() {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (imgArray: string[], title: string) => {
    setActiveImages(imgArray);
    setCurrentIdx(0);
    setModalTitle(title);
  };

  const closeModal = () => {
    setActiveImages(null);
    setCurrentIdx(0);
    setModalTitle("");
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImages) {
      setCurrentIdx((prev) => (prev + 1) % activeImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImages) {
      setCurrentIdx((prev) => (prev - 1 + activeImages.length) % activeImages.length);
    }
  };

  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Main Section Header */}
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">PRODUCTION REGISTRY // POW</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Competitions and Independent Projects</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              Click directly on any project card block to launch the modular system viewer and navigate through its dashboard interface layouts.
            </p>
          </div>
        </div>

        {/* SECTION 1: HACKATHONS */}
        <div>
          <div className="mb-6 flex items-center gap-4 pl-2">
            <div className="h-px w-8 bg-[#deff9a]/40" />
            <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">01 // Hackathons Section</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {hackathons.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => openModal(project.images, project.title)}
                className="rounded-[2rem] border border-[#deff9a]/10 bg-black/70 p-6 transition-all duration-300 hover:border-[#deff9a]/30 group cursor-pointer hover:bg-neutral-900/30"
              >
                <div className="flex flex-col gap-4 border-l-2 border-[#deff9a] pl-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 font-mono">
                      <span className="text-[11px] font-bold tracking-wider text-[#deff9a]"> {project.date} </span>
                      
                      {project.award && (
                        <>
                          <span className="text-[10px] text-neutral-500">//</span>
                          <span className="text-[11px] font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(251,191,36,0.1)]">
                            {project.award}
                          </span>
                        </>
                      )}
                      
                      <span className="text-[10px] text-neutral-500">//</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#deff9a]/80 bg-[#deff9a]/5 border border-[#deff9a]/10 px-2 py-0.5 rounded">
                        {project.buildType}
                      </span>
                    </div>
                    <h3 className="mt-2 text-3xl font-bold text-white group-hover:text-[#deff9a] transition-colors flex items-center gap-2">
                      {project.title}
                      <span className="text-xs font-mono text-neutral-500 font-normal opacity-0 group-hover:opacity-100 transition-opacity pl-2">
                        (Click to view gallery — {project.images.length} images)
                      </span>
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#daffde]/80 font-sans">{project.description}</p>
                  </div>

                  {/* Primary Code Source Action Node */}
                  <div className="pt-4 lg:pt-0 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
                    >
                      <span>VIEW REPOSITORY</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* SECTION 2: PERSONAL PROJECTS */}
        <div>
          <div className="mb-6 flex items-center gap-4 pl-2">
            <div className="h-px w-8 bg-[#deff9a]/40" />
            <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">02 // Personal Projects Section</h2>
          </div>

          <div className="flex flex-col gap-4">
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => openModal(project.images, project.title)}
                className="rounded-[2rem] border border-[#deff9a]/10 bg-black/70 p-6 transition-all duration-300 hover:border-[#deff9a]/30 group cursor-pointer hover:bg-neutral-900/30"
              >
                <div className="flex flex-col gap-4 border-l-2 border-[#deff9a] pl-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 font-mono">
                      <span className="text-[11px] font-bold tracking-wider text-[#deff9a]"> {project.date} </span>
                      <span className="text-[10px] text-neutral-500">//</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#deff9a] bg-[#deff9a]/10 border border-[#deff9a]/30 px-2 py-0.5 rounded">
                        {project.buildType}
                      </span>
                    </div>
                    <h3 className="mt-2 text-3xl font-bold text-white group-hover:text-[#deff9a] transition-colors flex items-center gap-2">
                      {project.title}
                      <span className="text-xs font-mono text-neutral-500 font-normal opacity-0 group-hover:opacity-100 transition-opacity pl-2">
                        (Click to view gallery — {project.images.length} images)
                      </span>
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#daffde]/80 font-sans">{project.description}</p>
                  </div>

                  {/* Primary Code Source Action Node */}
                  <div className="pt-4 lg:pt-0 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
                    >
                      <span>VIEW REPOSITORY</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </section>

      {/* LIGHTBOX SLIDER MODAL GALLERY PORTAL */}
      <AnimatePresence>
        {activeImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-[2.5rem] border border-[#deff9a]/20 bg-neutral-950 p-4 shadow-[0_0_60px_rgba(222,255,154,0.15)] flex flex-col gap-4 cursor-default"
            >
              {/* Modal Control Header Block */}
              <div className="flex items-center justify-between px-3 font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#deff9a] animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{modalTitle}</span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-xs font-bold text-[#deff9a]/80 bg-[#deff9a]/5 border border-[#deff9a]/10 px-2 py-0.5 rounded">
                    ASSET {currentIdx + 1} OF {activeImages.length}
                  </span>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-xs font-mono font-bold tracking-widest text-[#deff9a] bg-[#deff9a]/10 border border-[#deff9a]/20 px-4 py-1.5 rounded-xl hover:bg-[#deff9a] hover:text-black transition-all"
                >
                  ESC // CLOSE
                </button>
              </div>

              {/* Central Canvas Shell With Nav Controls */}
              <div className="relative overflow-hidden rounded-[1.8rem] border border-neutral-900 bg-neutral-900/30 aspect-video flex items-center justify-center group/canvas">
                
                {/* Image Element Node with animations */}
                <motion.img 
                  key={currentIdx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  src={activeImages[currentIdx]} 
                  alt={`${modalTitle} snapshot ${currentIdx + 1}`} 
                  className="w-full h-full object-contain select-none max-h-[68vh]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-xs font-mono text-neutral-500 text-center p-8">Asset placeholder missing:<br/>Save image file into public${activeImages[currentIdx]} to show it here.</div>`;
                    }
                  }}
                />

                {/* Left Arrow Toggle Button */}
                {activeImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white flex items-center justify-center font-mono font-bold hover:bg-[#deff9a] hover:text-black hover:border-transparent transition-all backdrop-blur-sm shadow-lg text-sm"
                    >
                      &larr;
                    </button>

                    {/* Right Arrow Toggle Button */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white flex items-center justify-center font-mono font-bold hover:bg-[#deff9a] hover:text-black hover:border-transparent transition-all backdrop-blur-sm shadow-lg text-sm"
                    >
                      &rarr;
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Dot Matrix Nav Indicators */}
              {activeImages.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 pb-1">
                  {activeImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => { e.stopPropagation(); setCurrentIdx(dotIdx); }}
                      className={`h-1.5 transition-all duration-300 rounded-full ${dotIdx === currentIdx ? "w-6 bg-[#deff9a]" : "w-1.5 bg-neutral-800 hover:bg-neutral-600"}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}