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
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl border border-red-400 
                p-8 backdrop-blur-lg bg-transparent 
                shadow-[0_0_25px_rgba(248,113,113,0.2)] hover:shadow-[0_0_30px_rgba(248,113,113,0.3)] 
                transition-all">
                
                <Dialog.Title className="text-xl font-bold text-red-300 mb-4 text-center">
                  ⚠️ Confirm Delete
                </Dialog.Title>

                <p className="mb-4 text-center">
                  Are you sure you want to delete the project 
                  <span className="font-bold text-red-200"> {project.title}</span>?
                </p>

                {project.github_backend_url && (
                  <p className="text-sm mb-1 text-center">
                    Backend: <a href={project.github_backend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_backend_url}</a>
                  </p>
                )}
                {project.github_frontend_url && (
                  <p className="text-sm mb-4 text-center">
                    Frontend: <a href={project.github_frontend_url} target="_blank" rel="noopener noreferrer" className="underline">{project.github_frontend_url}</a>
                  </p>
                )}

                <div className="flex justify-center space-x-4 mt-6">
                  <div className="glow-button-wrapper">
                    <button
                      onClick={onClose}
                      className="glow-button border-cyan-400 text-cyan-300"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="glow-button-wrapper">
                    <button
                      onClick={onConfirm}
                      className="glow-button border-red-400 text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
