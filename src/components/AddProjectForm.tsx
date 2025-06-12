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
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold">Add New Project</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="text"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Project
      </button>
    </form>
  );
}
