import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ToasterProvider from "@/components/toaster-provider";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth App",
  description: "Beautiful authentication system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
          min-h-screen text-gray-900 dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToasterProvider />

          {/* 🔹 Page Content */}
          <main className="flex items-center justify-center min-h-[80vh] p-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
