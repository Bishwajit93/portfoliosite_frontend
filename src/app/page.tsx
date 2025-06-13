'use client';
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6 p-4">
        <h1 className="text-4xl font-bold">👋 Hi, I'm Bishwajit Karmaker</h1>
        <p className="text-gray-700">
          I'm a dedicated developer and master's student based in Berlin. With a strong background in Scientific Computing and a passion for building real-world software, I'm currently developing full-stack applications with Django, PostgreSQL, and Next.js.
        </p>

        <p className="text-gray-600">
          After moving from Bangladesh to Germany in 2018, I’ve worked through academic challenges, personal growth, and professional transitions — always motivated by the belief that technology can make a real difference.
        </p>

        <p className="text-gray-600">
          Explore my <a href="/projects" className="text-blue-500 underline">projects</a>, check my <a href="/experience" className="text-blue-500 underline">experience</a>, or reach out via <a href="/contact" className="text-blue-500 underline">contact</a>.
        </p>
      </div>
    </Layout>
  );
}
