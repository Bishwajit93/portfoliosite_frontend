'use client';
import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">📞 Contact</h1>
        <p className="text-gray-600">
          You can reach me at <a href="mailto:bishwajit.karmaker@example.com" className="text-blue-500 underline">bishwajit.karmaker@example.com</a>
        </p>
        <p className="text-gray-600 mt-2">
          Or connect with me on GitHub, LinkedIn, or Telegram. A contact form will be added soon, inshaAllah.
        </p>
      </div>
    </Layout>
  );
}
