import React from 'react';

export default function Card({ card }) {
  return (
    <div className="p-4 border-r border-b border-gray-700">
      <h3 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
        <span className="text-yellow-400 text-xs">▸</span>
        {card.title}
      </h3>
      <ul className="list-none text-xs text-gray-400 leading-7 space-y-1">
        {card.items?.map((item, idx) => (
          <li key={idx} className="before:content-['·_'] before:text-gray-600">
            {item}
          </li>
        ))}
      </ul>
      {card.brute && (
        <div className="mt-3 p-2 bg-red-950 bg-opacity-20 border-l-2 border-red-600 rounded-r text-xs text-red-300 font-mono">
          <strong className="text-red-500 text-xs uppercase tracking-wider">Brute: </strong>
          {card.brute}
        </div>
      )}
      {card.optimal && (
        <div className="mt-2 p-2 bg-green-950 bg-opacity-20 border-l-2 border-green-400 rounded-r text-xs text-green-300 font-mono">
          <strong className="text-green-400 text-xs uppercase tracking-wider">Optimal: </strong>
          {card.optimal}
        </div>
      )}
    </div>
  );
}
