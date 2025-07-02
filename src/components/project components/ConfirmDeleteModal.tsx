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
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl 
                bg-red-400/5 border border-red-400 p-8 text-left 
                shadow-lg shadow-red-400/20 backdrop-blur-xl 
                hover:bg-red-400/10 transition-all">
                
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
                  <button
                    onClick={onClose}
                    className="border border-cyan-400 text-cyan-300 px-6 py-2 rounded-xl
                      shadow-md shadow-cyan-400/20 bg-transparent
                      hover:bg-cyan-200/10 hover:shadow-cyan-400/30
                      transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    className="border border-red-400 text-red-300 px-6 py-2 rounded-xl
                      shadow-md shadow-red-400/20 bg-transparent
                      hover:bg-red-200/10 hover:shadow-red-400/30
                      transition-all"
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
