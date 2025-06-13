'use client';
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6 p-4">
        <h1 className="text-4xl font-bold">👋 Hi, I am Bishwajit Karmaker</h1>
        <p className="text-gray-700">
          I am an M.Sc. student in Scientific Computing, based in Berlin. I build full-stack web applications using Django, PostgreSQL, and Next.js — with a passion for solving real-world problems through software.
        </p>
        <p className="text-gray-600">
          I moved from Bangladesh to Germany in 2018 and have since gained experience in both academia and professional environments. My background in mathematics continues to support my logical thinking and technical growth.
        </p>
        <p className="text-gray-600">
          Explore my <a href="/projects" className="text-blue-500 underline">projects</a>, check my <a href="/experience" className="text-blue-500 underline">experience</a>, or reach out via <a href="/contact" className="text-blue-500 underline">contact</a>.
        </p>
      </div>
    </Layout>
  );
}
