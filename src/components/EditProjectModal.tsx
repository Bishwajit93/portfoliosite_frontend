'use client';

import { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { Project, ProjectData } from "@/types/project";
import { updateProject } from "@/lib/api/projectApi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onProjectUpdated: () => Promise<void>;
  project: Project;
};

export default function EditProjectModal({ isOpen, onClose, onProjectUpdated, project }: Props) {
  const [form, setForm] = useState<ProjectData>({
    title: project.title,
    description: project.description,
    tech_stack: project.tech_stack,
    github_backend_url: project.github_backend_url ?? '',
    github_frontend_url: project.github_frontend_url ?? '',
    live_url: project.live_url ?? '',
    start_date: project.start_date ?? '',
    end_date: project.end_date ?? '',
    status: project.status
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.end_date && form.start_date && form.end_date < form.start_date) {
      setErrors({ end_date: "End date cannot be before start date." });
      return;
    }

    setSaving(true);
    setErrors({});

    try {
      await updateProject(project.id, form);
      await onProjectUpdated();
      onClose();
      alert("Project updated successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to update project.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-slate-900 border border-cyan-400 p-6 text-left shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-cyan-300 mb-4">
                  Edit Project
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4 text-slate-100 font-semibold">
                  <div>
                    <label className="block text-sm">Title</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none"
                      required />
                  </div>


                  <div>
                    <label className="block text-sm">Tech Stack</label>
                    <input type="text" name="tech_stack" value={form.tech_stack} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none"
                      required />
                  </div>

                  <div>
                    <label className="block text-sm">GitHub Backend URL</label>
                    <input type="url" name="github_backend_url" value={form.github_backend_url ?? ""} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm">GitHub Frontend URL</label>
                    <input type="url" name="github_frontend_url" value={form.github_frontend_url ?? ""} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm">Live URL</label>
                    <input type="url" name="live_url" value={form.live_url ?? ""} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none" />
                  </div>

                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label className="block text-sm">Start Date</label>
                      <input type="date" name="start_date" value={form.start_date ?? ""} onChange={handleChange}
                        className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm">End Date</label>
                      <input type="date" name="end_date" value={form.end_date ?? ""} onChange={handleChange}
                        className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none" />
                      {errors.end_date && <p className="text-red-400 text-sm mt-1">{errors.end_date}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm">Status</label>
                    <select name="status" value={form.status} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none">
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Paused">Paused</option>
                    </select>
                  </div>

                <div>
                    <label className="block text-sm">Description</label>
                    <textarea name="description" rows={3} value={form.description} onChange={handleChange}
                      className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent focus:outline-none"
                      required></textarea>
                  </div>

                  
                  <div className="text-right mt-6">
                    <button
                      type="submit"
                      disabled={saving}
                      className="border border-cyan-400 px-6 py-2 rounded hover:bg-cyan-200/20 transition"
                    >
                      {saving ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
