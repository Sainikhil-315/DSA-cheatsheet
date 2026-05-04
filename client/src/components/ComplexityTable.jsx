import React from 'react';
import { COMPLEXITY_TABLE } from '../data/dsaData';

export default function ComplexityTable() {
  return (
    <section className="mb-10 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden" id="complexity">
      <div className="flex items-center gap-3 p-3 bg-gray-950 border-b border-gray-700">
        <span className="font-mono text-xs bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">
          16
        </span>
        <h2 className="text-base font-bold uppercase tracking-wide text-white">
          Time Complexity Quick Ref
        </h2>
      </div>
      <div className="overflow-x-auto p-1">
        <table className="w-full border-collapse font-mono text-xs">
          <thead>
            <tr>
              <th className="bg-black text-gray-600 px-3 py-2 text-left font-bold text-xs uppercase tracking-widest">Algorithm / Structure</th>
              <th className="bg-black text-gray-600 px-3 py-2 text-left font-bold text-xs uppercase tracking-widest">Time</th>
              <th className="bg-black text-gray-600 px-3 py-2 text-left font-bold text-xs uppercase tracking-widest">Space</th>
              <th className="bg-black text-gray-600 px-3 py-2 text-left font-bold text-xs uppercase tracking-widest">Notes</th>
            </tr>
          </thead>
          <tbody>
            {COMPLEXITY_TABLE.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-800">
                <td className="px-3 py-2 text-gray-400 border-b border-gray-900">{row.algo}</td>
                <td className={`px-3 py-2 border-b border-gray-900 ${row.timeClass}`}>{row.time}</td>
                <td className="px-3 py-2 text-gray-400 border-b border-gray-900">{row.space}</td>
                <td className="px-3 py-2 text-gray-400 border-b border-gray-900">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
