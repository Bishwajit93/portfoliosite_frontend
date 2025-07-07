'use client';


import ContactForm from '@/components/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-cyan-200">
          Get in Touch
        </h1>

        <div className="flex justify-center space-x-6 mb-8 text-cyan-300 text-3xl">
          <a href="https://github.com/Bishwajit93" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bishwajit-karmaker/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:bish.karm123@gmail.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>

        <ContactForm />
      </main>
  );
}
