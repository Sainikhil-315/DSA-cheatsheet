import React from 'react';
import Card from './Card';

export default function Section({ section }) {
  return (
    <section className="dsa-section" id={section.id}>
      <div className="dsa-section-header">
        <span className="dsa-num">{section.num}</span>
        <h2>{section.title}</h2>
      </div>
      <div className="dsa-cards">
        {section.cards?.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}