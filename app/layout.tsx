import type { Metadata } from "next";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ThemeToggleButton from "@/components/ThemeToggleButton"; // We will create this quick small file next!

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
    <html lang="en" className={`${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full transition-colors duration-300">
        <div className="relative min-h-screen">
          <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-1rem))] -translate-x-1/2 rounded-full border border-[#deff9a]/20 bg-black/40 px-3 py-2.5 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold tracking-[0.32em] text-[#deff9a] uppercase">Tidimatso</div>
              <nav className="flex max-w-[450px] flex-wrap items-center justify-end gap-1 text-[9px] md:max-w-none md:gap-2 md:text-xs">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-2 py-2 font-medium text-[#daffde]/80 transition-all hover:bg-[#deff9a]/10 hover:text-[#deff9a] md:px-3"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Clean Brutalist Toggle Button sitting cleanly in your nav array */}
                <ThemeToggleButton />
              </nav>
            </div>
          </header>

          <div className="pt-20">{children}</div>
        </div>
      </body>
    </html>
  );
}