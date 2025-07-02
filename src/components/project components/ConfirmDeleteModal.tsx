'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Project } from "@/types/project";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  project: Project;
};

export default function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  project
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-900 border border-red-400 p-6 text-left shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-red-300 mb-4">
                  Confirm Delete
                </Dialog.Title>
                <p className="mb-4">
                  Are you sure you want to delete the project <span className="font-semibold">{project.title}</span>?
                </p>
                {project.github_backend_url && (
                  <p className="text-sm mb-1">Backend: <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a></p>
                )}
                {project.github_frontend_url && (
                  <p className="text-sm mb-4">Frontend: <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a></p>
                )}

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={onClose}
                    className="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400/20 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    className="border border-red-400 text-red-300 px-4 py-2 rounded hover:bg-red-400/20 transition"
                  >
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
