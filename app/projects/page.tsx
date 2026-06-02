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
    problemStatement: "South African municipalities face severe backlogs addressing infrastructural decay due to slow, manual tracking channels and misclassified incident logs.",
    techStack: ["Vite", "React", "TypeScript", "Python API", "OpenAI o4-mini", "GitHub Models"],
    insights: "Engineered automated computer vision routing using model inference logic to instantly categorize multi-channel incident photos, cutting routing delays down significantly while modeling predictive maintenance lines on dynamic tracking dashboards.",
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
    problemStatement: "Local hospital systems hemorrhage billions in unrecovered medical aid revenue due to administrative friction and massive backlogs in clinical ICD-10 coding workflows.",
    techStack: ["Next.js", "React", "Python", "NLP Pipeline", "SQL Database Engine"],
    insights: "Developed an automated clinical intelligence pipeline parsing unstructured clinical notes into precise ICD-10 structural categories within 5 seconds. Modeled a 90/10 financial optimization matrix empowering local hospital wards to independently self-fund and hire medical staff outside state constraints.",
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
    problemStatement: "Small-scale South African farmers lack accessible telemetry monitoring systems, exposing crops to sudden environmental collapses and sensor signal noise.",
    techStack: ["MicroPython", "ESP32 IoT Nodes", "MQTT Broker", "Python Backend", "Asynchronous SQLite"],
    insights: "Built a multi-threaded monitoring engine handling active telemetry fields (moisture, flame, gas). Integrated an asynchronous SQLite persistence framework and a 3-reading algorithmic debounce layer to completely neutralize solar noise false-positives, backed by a localized 5-language translation UI mapping traditional farming indicators.",
    repoUrl: "https://github.com/Vhutali01/GreenGuard",
  }
];

const personalProjects = [
  {
    title: "FUTURE DS 01",
    date: "April 19, 2026",
    buildType: "SOLO BUILD",
    images: [
      "/future-1.png",
      "/future-2.png",
      "/future-3.png",
      "/future-4.png",
      "/future-5.png",
      "/future-6.png"
    ],
    problemStatement: "Commercial enterprise retailers suffer margin leaks from unsystematic promotional discount scaling and unmapped geographic variable relationships.",
    techStack: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    insights: "Constructed detailed split-aggregation matrices auditing complex transactional lines. Built custom regression plots and distribution maps that isolate and mathematically prove exactly where aggressive markdown scales drop below baseline category profitability targets.",
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
    <main className="min-h-screen bg-transparent text-current">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Main Section Header */}
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">PRODUCTION REGISTRY // ARCHITECTURE</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Engineering & Analytics Showcase</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              Click on any system card block to launch the modular image gallery and audit runtime dashboards, system architectures, and live project highlights.
            </p>
          </div>
        </div>

        {/* SECTION 1: HACKATHONS */}
        <div>
          <div className="mb-6 flex items-center gap-4 pl-2">
            <div className="h-px w-8 bg-[#deff9a]/40" />
            <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">01 // Hackathons & Competitions</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {hackathons.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => openModal(project.images, project.title)}
                className="rounded-[2rem] border border-[#deff9a]/10 bg-black/70 p-6 transition-all duration-300 hover:border-[#deff9a]/30 group cursor-pointer hover:bg-neutral-900/10"
              >
                <div className="flex flex-col gap-4 border-l-2 border-[#deff9a] pl-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 font-mono">
                      <span className="text-[11px] font-bold tracking-wider text-[#deff9a]"> {project.date} </span>
                      
                      {project.award && (
                        <>
                          <span className="text-[10px] text-neutral-500">//</span>
                          <span className="text-[11px] font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
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
                        (View Systems — {project.images.length} Assets)
                      </span>
                    </h3>

                    {/* Technical Breakdown Grid */}
                    <div className="mt-4 space-y-3 border-t border-neutral-900 pt-4 text-sm">
                      <p className="leading-6"><strong className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">[ PROBLEM STATEMENT ]</strong> <span className="text-[#daffde]/90">{project.problemStatement}</span></p>
                      <p className="leading-6"><strong className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">[ DATA INSIGHT & RUNTIME OUTCOME ]</strong> <span className="text-[#daffde]/75">{project.insights}</span></p>
                    </div>

                    {/* Tech Stack Badge Cluster */}
                    <div className="mt-5 flex flex-wrap gap-1.5 items-center">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mr-2">Stack:</span>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[11px] bg-white/5 border border-white/10 rounded-md px-2 py-0.5 text-white/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-0 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
                    >
                      <span>VIEW SOURCE CODE</span>
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
            <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">02 // Independent Personal Projects</h2>
          </div>

          <div className="flex flex-col gap-6">
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => openModal(project.images, project.title)}
                className="rounded-[2rem] border border-[#deff9a]/10 bg-black/70 p-6 transition-all duration-300 hover:border-[#deff9a]/30 group cursor-pointer hover:bg-neutral-900/10"
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
                        (View Pipeline Visualizations — {project.images.length} Assets)
                      </span>
                    </h3>

                    {/* Technical Breakdown Grid */}
                    <div className="mt-4 space-y-3 border-t border-neutral-900 pt-4 text-sm">
                      <p className="leading-6"><strong className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">[ CHALLENGE STATEMENT ]</strong> <span className="text-[#daffde]/90">{project.problemStatement}</span></p>
                      <p className="leading-6"><strong className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">[ SYSTEM MECHANICS & INSIGHT ]</strong> <span className="text-[#daffde]/75">{project.insights}</span></p>
                    </div>

                    {/* Tech Stack Badge Cluster */}
                    <div className="mt-5 flex flex-wrap gap-1.5 items-center">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mr-2">Stack:</span>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[11px] bg-white/5 border border-white/10 rounded-md px-2 py-0.5 text-white/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-0 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
                    >
                      <span>VIEW NOTEBOOK SYSTEM</span>
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

              <div className="relative overflow-hidden rounded-[1.8rem] border border-neutral-900 bg-neutral-900/30 aspect-video flex items-center justify-center group/canvas">
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

                {activeImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white flex items-center justify-center font-mono font-bold hover:bg-[#deff9a] hover:text-black hover:border-transparent transition-all backdrop-blur-sm shadow-lg text-sm"
                    >
                      &larr;
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white flex items-center justify-center font-mono font-bold hover:bg-[#deff9a] hover:text-black hover:border-transparent transition-all backdrop-blur-sm shadow-lg text-sm"
                    >
                      &rarr;
                    </button>
                  </>
                )}
              </div>

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