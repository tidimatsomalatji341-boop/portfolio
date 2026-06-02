"use client";

import { motion } from "framer-motion";

const honestyPrinciples = [
  "Every dataset must be traceable, reproducible, and ethically sourced.",
  "Analytical output must preserve context, uncertainty, and evidence boundaries.",
  "Reporting must remain transparent, unbiased, and audit-ready.",
  "Model interpretation should remain accountable to the real-world decision environment.",
];

export default function SkillsHonestyPage() {
  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2.5rem] border border-[#deff9a]/20 bg-black/70 p-6 backdrop-blur-md"
        >
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">ACADEMIC HONESTY / COMPLIANCE</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Monospaced ethics command lane</h1>
          </div>

          <div className="mt-5 rounded-[1.5rem] border-l-2 border-[#deff9a] bg-[#000]/80 p-5">
            <p className="font-mono text-sm leading-7 text-[#daffde]">
              Academic integrity is treated as a product standard. Every model, chart, and data narrative must remain transparent, accountable, and grounded in clean methodology.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {honestyPrinciples.map((principle, index) => (
              <div key={principle} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-[#daffde]">
                <span className="mr-3 text-[#deff9a]">0{index + 1}.</span>
                {principle}
              </div>
            ))}
          </div>
        </motion.article>
      </section>
    </main>
  );
}
