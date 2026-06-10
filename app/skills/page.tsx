"use client";

import { motion } from "framer-motion";

const hardSkills = [
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
    title: "Data Management (Microsoft Excel & Access)",
    detail: "Leveraged for fast data cleaning, mathematical formula modeling, query optimization, and structured relational database design to keep raw metrics clean and referenceable.",
  },
  {
    title: "HTML",
    detail: "Used to understand document structures and build the basic visual frameworks for rendering interfaces on the web.",
  },
];

const softSkills = [
  {
    title: "Project Coordination & Leadership",
    detail: "Demonstrated through managing timelines and project execution workflows across collaborative environments like regional hackathons and the Mastercard Foundation Workspace.",
  },
  {
    title: "Data Storytelling & Communication",
    detail: "Translating abstract mathematical concepts, code architectures, and data pipeline results into clear, high-impact presentations for hackathon judges, team members, and academic peers.",
  },
  {
    title: "Collaborative Teamwork & Agile Execution",
    detail: "Thriving under fast-paced, high-pressure competitive builds; working adaptively in teams to build, test, and fix software prototypes incrementally under strict deadlines.",
  },
  {
    title: "Critical Thinking & Adaptive Problem Solving",
    detail: "Approaching unstructured system flaws and real-world backlogs with a logical, structural mindset—breaking complex problems down into step-by-step solutions.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          
          {/* Header Section */}
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">TECHNICAL & OPERATIONAL TOOLKIT</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">My Skills & Core Tools</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              The exact programming languages, quantitative frameworks, and soft capabilities I apply throughout my university studies and engineering builds.
            </p>
          </div>

          {/* SECTION 1: HARD SKILLS */}
          <div className="mt-8">
            <div className="mb-6 flex items-center gap-4 pl-2">
              <div className="h-px w-8 bg-[#deff9a]/40" />
              <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">01 // Technical & Hard Skills</h2>
            </div>

            <div className="flex flex-col gap-6">
              {hardSkills.map((row, index) => (
                <motion.article
                  key={row.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6"
                >
                  <div className="border-l-2 border-[#deff9a] pl-4">
                    <h2 className="text-xl font-semibold text-white tracking-wide">{row.title}</h2>
                    <p className="mt-2 text-base leading-8 text-[#daffde]/80">{row.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* SECTION 2: SOFT SKILLS */}
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-4 pl-2">
              <div className="h-px w-8 bg-[#deff9a]/40" />
              <h2 className="text-xs font-mono font-bold tracking-[0.4em] text-[#deff9a] uppercase">02 // Interpersonal & Operational Capabilities</h2>
            </div>

            <div className="flex flex-col gap-6">
              {softSkills.map((row, index) => (
                <motion.article
                  key={row.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6"
                >
                  <div className="border-l-2 border-[#deff9a] pl-4">
                    <h2 className="text-xl font-semibold text-white tracking-wide">{row.title}</h2>
                    <p className="mt-2 text-base leading-8 text-[#daffde]/80">{row.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Academic Integrity / Ethics Card */}
          <div className="mt-12 rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6">
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