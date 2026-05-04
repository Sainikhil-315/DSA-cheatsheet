import React from 'react';
import { TOC_ITEMS } from '../data/dsaData';

export default function TOC() {
  return (
    <nav className="flex flex-wrap gap-2 mb-10">
      {TOC_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="bg-gray-900 border border-gray-700 text-cyan-400 no-underline px-3 py-1.5 font-mono text-xs rounded transition-all hover:border-cyan-400 hover:bg-gray-800"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
