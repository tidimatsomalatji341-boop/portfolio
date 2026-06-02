"use client";

import { motion } from "framer-motion";

// This array acts as your logbook. Every time you finish a new practical, 
// just add a new object at the top of this list!
const weeklyLabs = [
  {
    date: "2026/05/04",
    title: "Ternary Heap Structure Validation",
    courseCode: "CSC 211",
    summary: "An algorithmic evaluation script managing structural relationships within an integer array representation of ternary heaps starting at index 1. Implements verification sequences checking multi-child parent offsets to determine valid min or max properties across continuous space constraints.",
    githubUrl: "https://github.com/tidimatsomalatji341-boop/CSC211-Practicals/tree/main/Prac3/4533496",
  },
  {
    date: "2026/04/24",
    title: "Binary Search Trees & File I/O Engine",
    courseCode: "CSC 211",
    summary: "A 50-mark data manipulation engine implementing encapsulated Node and BST architectures alongside a line-by-line file input parser (input.txt). Handles element insertion, lookup commands, height computations, traversals, and multi-child node deletion utilizing the in-order predecessor protocol.",
    githubUrl: "https://github.com/tidimatsomalatji341-boop/CSC211-Practicals/tree/main/Prac2/4533496",
  },
  {
    date: "2026/04/13",
    title: "Generic Binary Tree Implementations",
    courseCode: "CSC 211",
    summary: "An object-oriented framework utilizing generics to structure BinaryTreeNode and BinaryTree templates from scratch. Configures default/loaded constructors, dynamic getters and setters under strict encapsulation rules, and node pointer linkages to print level-order hierarchies.",
    githubUrl: "https://github.com/tidimatsomalatji341-boop/CSC211-Practicals/tree/main/Prac1/4533496",
  },
];

export default function PracticalsPage() {
  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">RECORD CHRONOLOGY // TRACKER</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">UWC Computer Science Labs</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              A rolling documentation of my university computing practicals and lab assignments structured by initialization timestamps. Click any block to examine the source code architecture directly on GitHub.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {weeklyLabs.map((lab, index) => (
              <motion.article
                key={lab.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6 transition-all duration-300 hover:border-[#deff9a]/40 group"
              >
                <div className="flex flex-col gap-4 border-l-2 border-[#deff9a] pl-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#deff9a]">{lab.date}</span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">// {lab.courseCode}</span>
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold text-white group-hover:text-[#deff9a] transition-colors">{lab.title}</h2>
                    <p className="mt-3 text-base leading-8 text-[#daffde]/80">{lab.summary}</p>
                  </div>

                  <div className="pt-2 lg:pt-0">
                    <a
                      href={lab.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
                    >
                      <span>VIEW CODE</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}