import React from 'react';

export default function PatternItem({ pattern }) {
  return (
    <div className="dsa-pattern-item">
      <h4>{pattern.title}</h4>
      <p>{pattern.desc}</p>
      <div className="dsa-signal">{pattern.signal}</div>
    </div>
  );
}