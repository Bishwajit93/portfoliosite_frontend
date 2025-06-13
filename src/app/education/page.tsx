'use client';
import Layout from "@/components/Layout";

export default function EducationPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">🎓 Education</h1>       
        <h1 className="text-3xl font-bold mb-4">🎓 Education (Updated)</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">TU Berlin</h2>
          <p className="text-gray-700">M.Sc. in Scientific Computing (Ongoing)</p>
          <p className="text-sm text-gray-600 mt-1">
            Focus on numerical mathematics, machine intelligence, and optimization.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">BRAC University, Dhaka</h2>
          <p className="text-gray-700">B.Sc. in Mathematics</p>
          <p className="text-sm text-gray-600 mt-1">
            Completed in Bangladesh with a strong foundation in analytical thinking, logic, and applied mathematics. My academic journey at BRAC University helped shape my interest in problem-solving and technology.
          </p>
        </div>
      </div>
    </Layout>
  );
}
