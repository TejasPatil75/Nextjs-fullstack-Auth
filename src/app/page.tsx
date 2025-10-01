"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 drop-shadow-lg"
      >
        Welcome to Auth App
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        A modern authentication system built with{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Next.js
        </span>
        , styled with{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Tailwind CSS
        </span>{" "}
        and secured with full backend integration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <Link href="/login">
          <button
            className="px-6 py-3 text-lg rounded-xl shadow-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button
            className="px-6 py-3 text-lg rounded-xl shadow-lg border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
