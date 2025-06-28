'use client';

import { useState, FormEvent } from "react";
import { updateProject } from "@/lib/api";
import { Project } from "@/types/project";

type EditProjectFormProps = {
  project: Project;
  onCancel: () => void;
  onProjectUpdated: () => void;
};

export default function EditProjectForm({
  project,
  onCancel,
  onProjectUpdated,
}: EditProjectFormProps) {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [techStack, setTechStack] = useState(project.tech_stack);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProject(project.id, { title, description, techStack });
      onProjectUpdated();
      onCancel();
    } catch (err) {
      if (err instanceof Error) {
        alert("Error: " + err.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-8 rounded-lg border border-cyan-400 text-slate-100 space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Edit Project</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <input
        type="text"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="border border-cyan-400 text-cyan-300 px-6 py-2 rounded 
                     bg-transparent 
                     hover:bg-cyan-400/30 hover:backdrop-blur-sm 
                     focus:bg-cyan-500/30 focus:backdrop-blur-sm focus:outline-none 
                     transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-400 text-gray-300 px-6 py-2 rounded 
                     bg-transparent 
                     hover:bg-gray-400/30 hover:backdrop-blur-sm 
                     focus:bg-gray-500/30 focus:backdrop-blur-sm focus:outline-none 
                     transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
