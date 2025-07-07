'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <div className="engine">
        <Link href="/">Bishwajit Karmaker</Link>
      </div>
      <nav className="nav-desktop">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="mobile-menu">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
