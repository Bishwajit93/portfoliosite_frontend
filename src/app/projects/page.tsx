'use client';

import { useState, useEffect } from "react";
import { Project } from "@/types/project";
import { fetchProjects } from "@/lib/api/projectApi";
import AddProjectForm from "@/components/project components/AddProjectForm";
import ProjectCard from "@/components/project components/ProjectCard";
import Layout from "@/components/Layout";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await fetchProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // This updates a single project in-place to keep order
  const handleProjectUpdated = async (updated: Project) => {
    setProjects(prevProjects =>
      prevProjects.map(proj => (proj.id === updated.id ? updated : proj))
    );
  };

  return (
    <Layout>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="border border-cyan-400 text-cyan-300 px-4 py-2 rounded 
            hover:bg-cyan-200/20 hover:backdrop-blur-sm 
            focus:bg-cyan-500/20 focus:backdrop-blur-sm focus:outline-none 
            transition"
          >
            {showForm ? "Close" : "+ Add New Project"}
          </button>
        </div>

        {showForm && (
          <AddProjectForm onProjectAdded={async () => {
            await loadProjects();
            setShowForm(false);
          }} />
        )}

        {loading && <p className="text-center mt-8">Loading projects...</p>}
        {error && <p className="text-red-400 text-center mt-8">{error}</p>}

        <div className="grid gap-6 mt-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onProjectUpdated={async () => {
                const fresh = await fetchProjects();
                const updated = fresh.find(p => p.id === project.id);
                if (updated) handleProjectUpdated(updated);
              }}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
