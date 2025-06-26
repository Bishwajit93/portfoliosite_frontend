'use client';

import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-2">📬 Contact Bishwajit Karmaker</h1>

        {/* Intro paragraph */}
        <p className="block text-sm font-medium text-blue">
          I would love to hear from you. Whether it is about a project, collaboration, or feedback —
          please leave your message below and I will get back to you shortly.
        </p>

        {/* Contact Form Component */}
        <ContactForm />
      </div>
    </Layout>
  );
}
