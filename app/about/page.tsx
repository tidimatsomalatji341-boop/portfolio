"use client";

import { motion } from "framer-motion";

const narrativeRows = [
  {
    label: "01 // BACKGROUND",
    title: "Background",
    content:
      "Growing up, I was always fascinated by logic, patterns, and problem-solving. This naturally led me to pursue a BSc in Mathematics and Statistics with Computer Science at the University of the Western Cape (UWC). Now in my second year, I am building a strong foundation in mathematical theory, statistical methods, and computer programming.",
  },
  {
    label: "02 // THE DATA SPARK",
    title: "Why I Love Data Science",
    content:
      "I realized that mathematics and statistics aren't just equations on a chalkboard, they are powerful tools used to find clear answers within massive pools of messy information. Seeing how data can be used to improve healthcare systems, understand climate trends, or help businesses make smarter decisions made me realize that data science is exactly where I want to focus my career.",
  },
  {
    label: "03 // FUTURE OBJECTIVES",
    title: "My Goals",
    content:
      "I want to become a skilled data professional who builds clean, reliable data systems and helpful predictive models. My ultimate goal is to use my statistics and coding skills to work on real-world projects that solve actual human, environmental, or operational challenges.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md flex flex-col gap-8">
          
          {/* Header Section */}
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">ABOUT ME / ACADEMIC PROFILE</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">My Academic & Data Journey</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              A second-year university student focusing on logic, numbers, and practical computing skills.
            </p>
          </div>

          {/* Quick Stats Grid - Simple and Honest */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-[9px] uppercase tracking-wider text-[#deff9a]">[ CURRENT LOCATION ]</p>
              <p className="mt-2 text-sm font-medium text-white">Cape Town, South Africa</p>
              <p className="text-xs text-[#daffde]/60">University of the Western Cape</p>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-[9px] uppercase tracking-wider text-[#deff9a]">[ DEGREE PROGRAMME ]</p>
              <p className="mt-2 text-sm font-medium text-white">BSc Undergraduate</p>
              <p className="text-xs text-[#daffde]/60">Year 2 Student</p>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 sm:col-span-2 lg:col-span-1">
              <p className="text-[9px] uppercase tracking-wider text-[#deff9a]">[ CORE MAJORS ]</p>
              <p className="mt-2 text-sm font-medium text-[#deff9a]">Mathematics & Statistics</p>
              <p className="text-xs text-[#daffde]/60">with Computer Science</p>
            </div>
          </div>

          {/* Narrative Content Blocks */}
          <div className="flex max-w-4xl flex-col gap-6">
            {narrativeRows.map((row, index) => (
              <motion.article
                key={row.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#deff9a]">{row.label}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{row.title}</h2>
                <p className="mt-4 text-base leading-8 text-[#daffde]/80">{row.content}</p>
              </motion.article>
            ))}
          </div>

          {/* CV/Resume Download Terminal Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-dashed border-neutral-800 bg-white/[0.01] p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4"
          >
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-500">
                <span className="text-[#deff9a] font-bold">[ ASSET MANAGEMENT ]</span>
                <span>//</span>
                <span>VERIFIED_CREDENTIALS.md</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">Curriculum Vitae</h3>
              <p className="text-sm leading-6 text-[#daffde]/70 font-sans">
                Review a comprehensive log of my university modules, academic transcripts, technical coursework timelines, and organizational projects in document form.
              </p>
            </div>

            {/* Practical Download Node Link */}
            <a
              href="/Tidimatso_Malatji_CV.pdf"
              download="Tidimatso_Malatji_CV.pdf"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#deff9a]/10 border border-[#deff9a]/20 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#deff9a] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent shrink-0 group shadow-md"
            >
              <svg 
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF CV</span>
            </a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}