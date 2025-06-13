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
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow mb-6 bg-yellow-50">
      <h2 className="text-xl font-bold">Edit Project</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="text"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
