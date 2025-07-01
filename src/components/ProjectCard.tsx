'use client';

import { useState } from "react";
import { Project } from "@/types/project";
import Modal from "./Modal";
import EditProjectModal from "./EditProjectModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { deleteProject } from "@/lib/api/projectApi";

type Props = {
  project: Project;
  onProjectUpdated: () => Promise<void>;
};

export default function ProjectCard({ project, onProjectUpdated }: Props) {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isDetailOpen, setDetailOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      await onProjectUpdated();
      setDeleteOpen(false);
      alert("Project deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to delete project.");
    }
  };

  return (
    <>
      {/* Preview Card */}
      <div
        onClick={() => setDetailOpen(true)}
        className="p-4 border border-cyan-400 rounded-lg hover:bg-cyan-200/10 transition relative cursor-pointer hover:scale-[1.03] hover:shadow-lg"
        title="Click to view details"
      >
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

        <div className="space-y-1 text-sm">
          <p><span className="font-bold">Status:</span> {project.status}</p>
          {project.tech_stack && <p><span className="font-bold">Tech Stack:</span> {project.tech_stack}</p>}
          {project.start_date && <p><span className="font-bold">Start:</span> {project.start_date}</p>}
          {project.status === "Completed" && project.end_date && (
            <p><span className="font-bold">End:</span> {project.end_date}</p>
          )}
          {project.github_backend_url && (
            <p><span className="font-bold">GitHub Backend:</span> <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a></p>
          )}
          {project.github_frontend_url && (
            <p><span className="font-bold">GitHub Frontend:</span> <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a></p>
          )}
          {project.live_url && (
            <p><span className="font-bold">Live:</span> <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="underline">{project.live_url}</a></p>
          )}
          {project.description && (
            <p
              className="mt-2 line-clamp-3"
              title={project.description}
            >
              <span className="font-bold">Description:</span> {project.description}
            </p>
          )}
        </div>

        {/* Buttons moved to bottom right */}
        <div className="flex justify-end space-x-2 mt-4" onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setEditOpen(true)}
            className="border border-cyan-400 px-3 py-1 rounded hover:bg-cyan-200/20 cursor-pointer transition"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteOpen(true)}
            className="border border-red-400 text-red-300 px-3 py-1 rounded hover:bg-red-400/20 cursor-pointer transition"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {isDetailOpen && (
        <Modal onClose={() => setDetailOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <div className="space-y-2 text-sm max-h-[60vh] overflow-y-auto">
            <p><span className="font-bold">Status:</span> {project.status}</p>
            {project.tech_stack && <p><span className="font-bold">Tech Stack:</span> {project.tech_stack}</p>}
            {project.start_date && <p><span className="font-bold">Start:</span> {project.start_date}</p>}
            {project.status === "Completed" && project.end_date && (
              <p><span className="font-bold">End:</span> {project.end_date}</p>
            )}

            {project.github_backend_url && (
              <p><span className="font-bold">GitHub Backend:</span> <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a></p>
            )}
            {project.github_frontend_url && (
              <p><span className="font-bold">GitHub Frontend:</span> <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a></p>
            )}
            {project.live_url && (
              <p><span className="font-bold">Live:</span> <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="underline">{project.live_url}</a></p>
            )}
            {project.description && (
              <p><span className="font-bold">Description:</span> {project.description}</p>
            )}
          </div>
        </Modal>
      )}

      {/* Edit Modal */}
      <EditProjectModal
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        onProjectUpdated={onProjectUpdated}
        project={project}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        project={project}
      />
    </>
  );
}
