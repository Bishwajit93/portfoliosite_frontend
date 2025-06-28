'use client';

import { useState, FormEvent } from "react";
import { createProject } from "@/lib/api";

type AddProjectFormProps = {
  onProjectAdded: () => void;
};

export default function AddProjectForm({ onProjectAdded }: AddProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createProject({ title, description, techStack });
      setTitle("");
      setDescription("");
      setTechStack("");
      onProjectAdded();
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
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <input
        type="text"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 bg-transparent text-slate-100 font-normal
                   hover:bg-cyan-200/20 hover:backdrop-blur-sm 
                   focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none transition"
        required
      />

      <button
        type="submit"
        className="border border-cyan-400 text-cyan-300 px-6 py-2 rounded 
                   bg-transparent 
                   hover:bg-cyan-400/30 hover:backdrop-blur-sm 
                   focus:bg-cyan-500/30 focus:backdrop-blur-sm focus:outline-none transition"
      >
        Add Project
      </button>
    </form>
  );
}
