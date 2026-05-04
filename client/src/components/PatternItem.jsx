import React from 'react';

export default function PatternItem({ pattern }) {
  return (
    <div className="p-3 border-r border-b border-gray-700">
      <h4 className="text-sm font-bold text-yellow-400 mb-2">
        {pattern.title}
      </h4>
      <p className="text-xs text-gray-600 leading-relaxed mb-2">
        {pattern.desc}
      </p>
      <div className="text-xs text-cyan-400 font-mono">
        {pattern.signal}
      </div>
    </div>
  );
}
