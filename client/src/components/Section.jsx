import React from 'react';
import Card from './Card';

export default function Section({ section }) {
  return (
    <section className="mb-10 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden" id={section.id}>
      <div className="flex items-center gap-3 p-3 bg-gray-950 border-b border-gray-700">
        <span className="font-mono text-xs bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">
          {section.num}
        </span>
        <h2 className="text-base font-bold uppercase tracking-wide text-white">
          {section.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {section.cards?.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}
