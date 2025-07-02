'use client';

import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-cyan-400/5 border border-cyan-400 rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto
          shadow-lg shadow-cyan-400/20 backdrop-blur-xl hover:bg-cyan-400/10 transition-all relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-cyan-300 hover:text-cyan-400 text-2xl font-bold transition"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
