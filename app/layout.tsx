import type { Metadata } from "next";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ThemeToggleButton from "@/components/ThemeToggleButton"; 

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tidimatso | Cyber-Academic Data Portfolio",
  description: "Interactive portfolio for Tidimatso, showcasing academic, technical, and practical data science work.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/practicals", label: "Practicals" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-black text-[#daffde] transition-colors duration-300" suppressHydrationWarning>
        {/* flex flex-col ensures the footer behaves perfectly on varying screen heights */}
        <div className="relative min-h-screen flex flex-col justify-between">
          
          <div>
            <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-1rem))] -translate-x-1/2 rounded-full border border-[#deff9a]/20 bg-neutral-900/40 px-3 py-2.5 backdrop-blur-md transition-colors duration-300">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold tracking-[0.32em] text-[#deff9a] uppercase">Tidimatso</div>
                <nav className="flex max-w-[450px] flex-wrap items-center justify-end gap-1 text-[9px] md:max-w-none md:gap-2 md:text-xs">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full px-2 py-2 font-medium transition-all hover:bg-[#deff9a]/10 hover:text-[#deff9a] md:px-3"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <ThemeToggleButton />
                </nav>
              </div>
            </header>

            {/* Added extra padding bottom (pb-16) to give space before the copyright info */}
            <main className="pt-20 pb-16">{children}</main>
          </div>

          {/* Minimal Cyber Copyright Footer */}
          <footer className="w-full py-6 text-center text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 transition-all duration-300">
            © {new Date().getFullYear()} Tidimatso Malatji // All Rights Reserved
          </footer>

        </div>
      </body>
    </html>
  );
}