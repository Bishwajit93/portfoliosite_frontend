'use client';

import { motion } from "framer-motion";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ y: "100vh", opacity: 1 }}
      animate={{ y: "0" }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
    >
      <p>© 2025 Bishwajit Karmaker. All Rights Reserved.</p>
    </motion.footer>
  );
}
