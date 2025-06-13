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
      <header className="bg-gray-800 text-white px-4 py-3">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <h1 className="text-lg sm:text-xl font-bold">Bishwajit Karmaker</h1>
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm sm:text-base hover:underline ${
                    isActive ? "text-blue-400 font-bold" : "text-white"
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
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 text-sm">
        © {new Date().getFullYear()} Bishwajit Karmaker. All rights reserved.
      </footer>
    </div>
  );
}
