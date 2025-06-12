'use client';

import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/ai";

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            <p className="text-sm text-gray-500">{project.tech_stack}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
