'use client';

import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-cyan-400 p-6 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-cyan-300 hover:text-cyan-400 text-2xl font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
