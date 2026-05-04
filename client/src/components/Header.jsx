import React from 'react';

export default function Header() {
  return (
    <header className="border-b-2 border-yellow-400 pb-6 mb-10 flex flex-wrap justify-between items-end gap-4">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          DSA <span className="text-yellow-400">Quick Revision</span>
        </h1>
        <p className="text-sm text-gray-600 mt-1 font-mono">HackWithInfy Round 2 · Nikh's Cheat Sheet</p>
      </div>
      <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded tracking-wider uppercase">
        ⚡ Tonight's Prep
      </div>
    </header>
  );
}
