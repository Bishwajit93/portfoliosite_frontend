'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "@/styles/header.css";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="train-header">
      <motion.div
        initial={{ y: "-60vh", opacity: 1 }}
        animate={{ y: "0" }}
        transition={{ 
          duration: 1.4, 
          ease: [0.68, -0.55, 0.27, 1.55] // springy bezier for a bounce
        }}
        style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          width: "100%" 
        }}
      >
        <Link
          href="/"
          cassName="engine"
        >
          Bishwajit Karmaker
        </Link>

        <div className="train">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`bogie ${isActive ? "active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </header>
  );
}
