'use client';

import { useState } from "react";
import { Project } from "@/types/project";
import Modal from "../Modal";
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
        <div
          onClick={() => setDetailOpen(true)}
          className="p-3 sm:p-4 border border-cyan-400 rounded-xl 
            hover:bg-cyan-200/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20 
            transition relative cursor-pointer mt-4"
          title="Click to view details"
        >

        <h2 className="text-xl font-semibold mb-3 text-cyan-200">{project.title}</h2>

        <div className="space-y-1 text-sm">
          <p><span className="font-bold text-cyan-300">Status:</span> {project.status}</p>
          {project.tech_stack && <p><span className="font-bold text-cyan-300">Tech Stack:</span> {project.tech_stack}</p>}
          {project.start_date && <p><span className="font-bold text-cyan-300">Start:</span> {project.start_date}</p>}
          {project.status === "Completed" && project.end_date && (
            <p><span className="font-bold text-cyan-300">End:</span> {project.end_date}</p>
          )}
          {project.github_backend_url && (
            <p><span className="font-bold text-cyan-300">GitHub Backend:</span> <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a></p>
          )}
          {project.github_frontend_url && (
            <p><span className="font-bold text-cyan-300">GitHub Frontend:</span> <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a></p>
          )}
          {project.live_url && (
            <p><span className="font-bold text-cyan-300">Live:</span> <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="underline">{project.live_url}</a></p>
          )}
          {project.description && (
            <p className="mt-2 line-clamp-3" title={project.description}>
              <span className="font-bold text-cyan-300">Description:</span> {project.description}
            </p>
          )}
        </div>

        <div className="flex justify-end space-x-3 mt-6" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setEditOpen(true)}
            className="border border-cyan-400 text-cyan-300 px-4 py-2 rounded-xl 
              shadow-md shadow-cyan-400/20 bg-transparent
              hover:bg-cyan-200/10 hover:shadow-cyan-400/30 transition-all"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteOpen(true)}
            className="border border-red-400 text-red-300 px-4 py-2 rounded-xl 
              shadow-md shadow-red-400/20 bg-transparent
              hover:bg-red-200/10 hover:shadow-red-400/30 transition-all"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {isDetailOpen && (
        <Modal onClose={() => setDetailOpen(false)}>
          <h2 className="text-2xl font-bold mb-4 text-cyan-200">{project.title}</h2>
          <div className="space-y-2 text-sm max-h-[60vh] overflow-y-auto">
            <p><span className="font-bold text-cyan-300">Status:</span> {project.status}</p>
            {project.tech_stack && <p><span className="font-bold text-cyan-300">Tech Stack:</span> {project.tech_stack}</p>}
            {project.start_date && <p><span className="font-bold text-cyan-300">Start:</span> {project.start_date}</p>}
            {project.status === "Completed" && project.end_date && (
              <p><span className="font-bold text-cyan-300">End:</span> {project.end_date}</p>
            )}
            {project.github_backend_url && (
              <p><span className="font-bold text-cyan-300">GitHub Backend:</span> <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a></p>
            )}
            {project.github_frontend_url && (
              <p><span className="font-bold text-cyan-300">GitHub Frontend:</span> <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a></p>
            )}
            {project.live_url && (
              <p><span className="font-bold text-cyan-300">Live:</span> <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="underline">{project.live_url}</a></p>
            )}
            {project.description && (
              <p><span className="font-bold text-cyan-300">Description:</span> {project.description}</p>
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

      {/* Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        project={project}
      />
    </>
  );
}
