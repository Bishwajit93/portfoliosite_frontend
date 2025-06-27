'use client';

import React from 'react';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 flex justify-center items-end z-0 pointer-events-none">
        <div className="relative w-full max-w-6xl px-4 pb-8 flex justify-center">
          {/* Chair */}
          <div className="absolute bottom-0 w-24 h-32 bg-gray-800 rounded-b-md shadow-lg left-[40%]"></div>

          {/* Desk */}
          <div className="relative w-full max-w-4xl h-36 bg-gray-700 rounded-t-lg shadow-xl z-10">
            {/* Left Monitor */}
            <div className="absolute -top-20 left-[20%] w-24 h-16 bg-black rounded shadow-inner"></div>

            {/* Center Monitor */}
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-black rounded shadow-inner"></div>

            {/* Right Monitor */}
            <div className="absolute -top-20 right-[20%] w-24 h-16 bg-black rounded shadow-inner"></div>

            {/* Laptop */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-24 h-14 bg-gray-600 rounded-t-md border border-gray-400 shadow-md z-10"></div>

            {/* Keyboard */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gray-400 rounded-sm"></div>

            {/* Mouse */}
            <div className="absolute -top-4 left-[58%] w-3 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
