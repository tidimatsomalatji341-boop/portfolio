"use client";

import { motion } from "framer-motion";

const proficiencyRows = [
  {
    title: "Python Programming",
    detail: "Used for processing datasets, solving algorithmic challenges, and writing logic scripts for computational modules.",
  },
  {
    title: "Java",
    detail: "Applied to learn object-oriented programming concepts, strong data typing, and foundational software engineering structures.",
  },
  {
    title: "R Programming Language",
    detail: "Utilized within my Statistics courses for probability modeling, running hypothesis tests, and building analytical charts.",
  },
  {
    title: "SAS",
    detail: "Used for managing larger-scale data sets, statistical analysis, and executing structured data analytics pipelines.",
  },
  {
    title: "Mathematical Foundations (Algebra & Calculus)",
    detail: "Applying matrix operations, vector spaces, and advanced calculus to understand optimization and how data is transformed in algorithms.",
  },
  {
    title: "Probability & Statistical Inference",
    detail: "Using probability distributions, hypothesis testing, and confidence intervals to analyze data variations and back up claims with evidence.",
  },
  {
    title: "HTML",
    detail: "Used to understand document structures and build the basic visual frameworks for rendering interfaces on the web.",
  },
  {
    title: "Microsoft Excel",
    detail: "Leveraged for quick data cleaning, building formula models, and transforming raw metrics into readable tables and charts.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          
          {/* Header Section */}
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">TECHNICAL & ANALYTICAL TOOLKIT</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">My Skills & Core Tools</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              The real programming languages, mathematical concepts, and statistical frameworks I use throughout my university studies at UWC.
            </p>
          </div>

          {/* Clean List of Your Actual Skills */}
          <div className="mt-8 flex flex-col gap-6">
            {proficiencyRows.map((row, index) => (
              <motion.article
                key={row.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6"
              >
                <div className="border-l-2 border-[#deff9a] pl-4">
                  <h2 className="text-xl font-semibold text-white tracking-wide">{row.title}</h2>
                  <p className="mt-2 text-base leading-8 text-[#daffde]/80">{row.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Academic Integrity / Ethics Card */}
          <div className="mt-8 rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#deff9a]">ACADEMIC INTEGRITY</p>
                <p className="mt-1 text-xl font-semibold text-white">Data Ethics & Professional Standards</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[#daffde]/80">
                Whether handling university assignments, writing computer code, or running statistical operations, I commit to absolute accuracy and honesty. This means checking data biases, accurately reporting calculations, and keeping all research transparent and verifiable.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}