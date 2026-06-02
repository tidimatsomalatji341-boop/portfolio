"use client";

import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");

    if (theme === "light") {
      body.classList.add("light-theme");
    } else {
      body.classList.add("dark-theme");
    }

    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const label = theme === "light" ? "☀ Light" : "☾ Dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#daffde] transition-all hover:bg-[#deff9a] hover:text-black hover:border-transparent"
    >
      {label}
    </button>
  );
}
