'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import '@/styles/contactPage.css';

const ContactPage: React.FC = () => {
  return (
    <main className="contact-page">
      <p className="text-center text-cyan-100 mb-8 max-w-xl">
        Whether you have an exciting project in mind, need a reliable developer for your next idea, 
        or just want to connect — feel free to reach out. I am always open to collaborations, freelance 
        opportunities, or even sharing insights and resources. Let us build something amazing together!
      </p>
      <div className="contact-form">
        <ContactForm />
      </div>

      <div className="contact-links">
        <div className="contact-card">
          <FaGithub />
          <span>
            <a
              href="https://github.com/Bishwajit93"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Bishwajit93
            </a>
          </span>
        </div>

        <div className="contact-card">
          <FaLinkedin />
          <span>
            <a
              href="https://www.linkedin.com/in/bishwajit-karmaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/bishwajit-karmaker
            </a>
          </span>
        </div>

        <div className="contact-card">
          <FaEnvelope />
          <span>
            <a href="mailto:bish.karm123@gmail.com">
              bish.karm123@gmail.com
            </a>
          </span>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
