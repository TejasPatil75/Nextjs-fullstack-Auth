import { ReactNode } from "react";

export default function AuthCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="w-full max-w-md mx-auto 
        bg-white/30 dark:bg-black/30 
        backdrop-blur-xl shadow-2xl 
        border border-white/20 dark:border-white/10 
        rounded-2xl p-8 animate-fade-in"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        {title}
      </h1>
      {children}
    </div>
  );
}
