import React from 'react';

export default function Card({ card }) {
  return (
    <div className="dsa-card">
      <h3>{card.title}</h3>
      <ul>
        {card.items?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {card.brute && (
        <div className="dsa-brute">
          <strong>Brute:</strong> {card.brute}
        </div>
      )}
      {(card.optimal || card.tip) && (
        <div className="dsa-tip">
          <strong>{card.optimal ? 'Optimal:' : 'Key:'}</strong> {card.optimal || card.tip}
        </div>
      )}
    </div>
  );
}