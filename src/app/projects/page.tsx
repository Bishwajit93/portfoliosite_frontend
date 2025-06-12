'use client';
export const dynamic = "force-dynamic";


import { useEffect, useState } from "react";
import { fetchProjects, deleteProject } from "@/lib/api";
import AddProjectForm from "@/components/AddProjectForm";

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

  const loadProjects = () => {
    setLoading(true);
    fetchProjects()
      .then(setProjects)
      .catch((err) => setError(err instanceof Error ? err.message : "Unknown error"))
      .finally(() => setLoading(false));
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (!confirmed) return;

    try {
      await deleteProject(id);
      loadProjects(); // Refresh the list
    } catch (err) {
      if (err instanceof Error) {
        alert("Error: " + err.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">📦 My Portfolio Projects</h1>
      <AddProjectForm onProjectAdded={loadProjects} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="border p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p>{project.description}</p>
                  <p className="text-sm text-gray-500">{project.tech_stack}</p>
                </div>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-sm text-red-600 border border-red-600 px-2 py-1 rounded hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

