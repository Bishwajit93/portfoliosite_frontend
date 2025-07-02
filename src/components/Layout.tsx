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
      <header className="bg-cyan-950 bg-opacity-90 px-4 py-3 fixed top-0 w-full backdrop-blur-md z-50 text-cyan-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <Link href="/" className="text-lg sm:text-xl font-bold hover:underline">
            Bishwajit Karmaker
          </Link>
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm sm:text-base border px-3 py-1 rounded transition 
                    ${isActive 
                      ? "border-cyan-400 bg-cyan-200/20 text-cyan-300 font-bold backdrop-blur-sm"
                      : "border-transparent hover:border-cyan-400 hover:bg-cyan-200/20 hover:text-cyan-300 hover:backdrop-blur-sm text-cyan-200"
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
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-cyan-950 bg-opacity-90 px-4 py-3 text-center text-cyan-100 backdrop-blur-md">
        © {new Date().getFullYear()} Bishwajit Karmaker (Abdullah). All rights reserved.
      </footer>
    </div>
  );
}
