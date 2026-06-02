"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Updated with completely unique labels to prevent map errors
const contactLinks = [
  { label: "WhatsApp Chat", value: "+27 75 439 0033", href: "https://wa.me/27754390033" },
  { label: "Direct Email", value: "tidimatso.malatji01@gmail.com", href: "mailto:tidimatso.malatji01@gmail.com" },
  { label: "GitHub Profile", value: "github.com/tidimatsomalatji341-boop", href: "https://github.com/tidimatsomalatji341-boop" },
  { label: "LinkedIn Connection", value: "linkedin.com/in/tidimatso-malatji", href: "https://www.linkedin.com/in/tidimatso-malatji-6bb5472a7/" },
  { label: "Instagram Handle", value: "@tidimatso_malatji341", href: "https://www.instagram.com/tidimatso_malatji341/" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // CRITICAL: Replace 'your_real_formspree_id' with your actual Formspree endpoint token string
      const response = await fetch("https://formspree.io/f/maqkrorj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please check your form setup configuration.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-[#daffde]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#deff9a]/10 bg-white/5 p-6 backdrop-blur-md">
          
          {/* Main Layout Header */}
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#deff9a]">GET IN TOUCH</p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Contact Me</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#daffde]/75">
              Feel free to reach out using my social media links on the left, or send me a direct message using the email form on the right. I will get back to you as soon as possible!
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* Left Column: Direct Links */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#deff9a]">MY LINKS</p>
                <p className="mt-2 text-2xl font-semibold text-white">Find me online</p>
                
                <div className="mt-4 rounded-[1.25rem] border border-[#deff9a]/20 bg-[#deff9a]/5 p-4 text-sm text-[#daffde]">
                  <p className="font-semibold text-white font-mono">[ LOCATION ]</p>
                  <p className="mt-2 text-neutral-400">Cape Town, South Africa</p>
                  <p className="mt-1 text-xs text-[#deff9a]/70">University of the Western Cape</p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-[#daffde] transition-all duration-300 hover:translate-x-2 hover:border-[#deff9a]/40 hover:bg-[#deff9a]/5 group"
                    >
                      <span className="font-semibold text-white group-hover:text-[#deff9a] transition-colors">{link.label}</span>
                      <span className="text-xs text-[#daffde]/60 font-mono">{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-900 text-xs text-neutral-500 font-mono">
                LINKS ACTIVE AND READY
              </div>
            </motion.section>

            {/* Right Column: Simple Form */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#deff9a]/20 bg-black/70 p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#deff9a]">EMAIL FORM</p>
                <p className="mt-2 text-2xl font-semibold text-white">Send a message</p>
                
                <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1 font-mono">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-sm text-[#daffde] outline-none focus:border-[#deff9a]/50 transition-colors placeholder:text-[#daffde]/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1 font-mono">Your Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-sm text-[#daffde] outline-none focus:border-[#deff9a]/50 transition-colors placeholder:text-[#daffde]/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 ml-1 font-mono">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3.5 text-sm text-[#daffde] outline-none focus:border-[#deff9a]/50 transition-colors placeholder:text-[#daffde]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#deff9a] py-3.5 text-sm font-bold text-black transition-all hover:opacity-90 disabled:opacity-40 flex justify-center items-center font-mono tracking-wider"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>

              {/* Status Indicator Screen area */}
              <div className="mt-4 min-h-[50px]">
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-[#deff9a]/30 bg-[#deff9a]/5 px-4 py-3 text-xs text-[#deff9a] font-mono"
                  >
                    SUCCESS: Your message was sent! I will check it and get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.section>

          </div>
        </div>
      </section>
    </main>
  );
}