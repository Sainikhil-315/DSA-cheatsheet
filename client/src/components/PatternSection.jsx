import React from 'react';
import PatternItem from './PatternItem';
import { PATTERNS } from '../data/dsaData';

export default function PatternSection() {
  return (
    <section className="dsa-section" id="patterns">
      <div className="dsa-section-header">
        <span className="dsa-num">15</span>
        <h2>Pattern Recognition — See this → Think that</h2>
      </div>
      <div className="dsa-pattern-grid">
        {PATTERNS.map((pattern, idx) => (
          <PatternItem key={idx} pattern={pattern} />
        ))}
      </div>
    </section>
  );
}