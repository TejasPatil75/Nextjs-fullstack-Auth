//// optional  Navbar to add

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
        w-[90%] max-w-4xl flex justify-between items-center
        px-6 py-3 rounded-2xl backdrop-blur-md 
        bg-white/30 dark:bg-black/30 
        border border-white/20 dark:border-white/10 shadow-lg"
    >
      <Link
        href="/"
        className="text-xl font-bold tracking-wide text-indigo-700 dark:text-indigo-300"
      >
        ✨ AuthApp
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/login"
          className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
        >
          Signup
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-white/40 dark:bg-black/40 shadow hover:scale-105 transition-transform"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

