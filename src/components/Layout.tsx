'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="bg-cyan-900/30 shadow-lg shadow-cyan-400/10 border-b border-cyan-400/20 
        px-6 py-3 fixed top-0 w-full backdrop-blur-2xl z-50 text-cyan-100 rounded-b-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
          <Link href="/" className="text-xl font-extrabold tracking-wide whitespace-nowrap glow-text">
            Bishwajit Karmaker
          </Link>
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`border px-3 py-1 rounded-lg transition whitespace-nowrap
                    ${
                      isActive
                        ? "border-cyan-400 bg-cyan-200/10 text-cyan-200 shadow-md shadow-cyan-400/20"
                        : "border-transparent hover:border-cyan-400 hover:bg-cyan-200/10 hover:text-cyan-200 hover:shadow-md hover:shadow-cyan-400/20"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-cyan-900/30 shadow-inner shadow-cyan-400/10 border-t border-cyan-400/20 
        px-6 py-3 text-center text-cyan-100 backdrop-blur-2xl rounded-t-xl">
        © {new Date().getFullYear()} Bishwajit Karmaker (Abdullah). All rights reserved.
      </footer>
    </div>
  );
}
