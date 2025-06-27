// app/contact/page.tsx
'use client';

import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-200 mb-4 text-center">
          Contact Bishwajit Karmaker
        </h1>
        <p className="text-cyan-100 text-center max-w-xl mb-8">
          I would love to hear from you. Whether it is about a project, collaboration, or feedback — please leave your message below and I will get back to you shortly.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </Layout>
  );
}
