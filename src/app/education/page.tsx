'use client';
import Layout from "@/components/Layout";

export default function EducationPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">🎓 Education</h1>
        <p className="text-gray-600">
          I am  pursuing a Master&apos;s degree in Scientific Computing at TU Berlin, with focus on numerical mathematics, machine intelligence, and optimization.
        </p>
        <p className="text-gray-600 mt-2">
          Before this, I completed my Bachelor&apos;s degree in Bangladesh with a strong foundation in mathematics and logic, which continues to support my programming journey today.
        </p>
      </div>
    </Layout>
  );
}
