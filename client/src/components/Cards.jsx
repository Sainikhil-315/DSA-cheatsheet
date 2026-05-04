import React from 'react';

// Grid card component for regular sections
export const CardSimple = ({ card }) => (
  <div
    className="p-4 border-r border-b"
    style={{ borderColor: '#1e1e2e' }}
  >
    <h3
      className="text-sm font-bold mb-2 flex items-center gap-2"
      style={{ color: '#40c8f0' }}
    >
      <span style={{ color: '#f0c040', fontSize: '0.7rem' }}>▸</span>
      {card.title}
    </h3>
    <ul
      className="list-none text-sm space-y-1"
      style={{ color: '#b0b0c8' }}
    >
      {card.items?.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          <span style={{ color: '#666688' }}>·  </span>
          {item}
        </li>
      ))}
    </ul>
    {card.brute && (
      <div
        className="mt-2 p-2 rounded text-xs"
        style={{
          background: 'rgba(240, 64, 96, 0.08)',
          borderLeft: '2px solid #f04060',
          color: '#c080a0',
          fontFamily: 'monospace',
        }}
      >
        <strong style={{ color: '#f04060', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Brute:
        </strong>{' '}
        {card.brute}
      </div>
    )}
    {card.tip && (
      <div
        className="mt-2 p-2 rounded text-xs"
        style={{
          background: 'rgba(64, 240, 144, 0.06)',
          borderLeft: '2px solid #40f090',
          color: '#80c0a0',
          fontFamily: 'monospace',
        }}
      >
        <strong style={{ color: '#40f090', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Optimal:
        </strong>{' '}
        {card.tip}
      </div>
    )}
  </div>
);

// Full-width card component
export const CardFull = ({ card }) => (
  <div
    className="p-4 border-b"
    style={{ borderColor: '#1e1e2e' }}
  >
    <h3
      className="text-sm font-bold mb-2 flex items-center gap-2"
      style={{ color: '#40c8f0' }}
    >
      <span style={{ color: '#f0c040', fontSize: '0.7rem' }}>▸</span>
      {card.title}
    </h3>
    <ul
      className="list-none text-sm"
      style={{
        color: '#b0b0c8',
        lineHeight: '1.8',
        columnCount: 2,
        gap: '2rem',
      }}
    >
      {card.items?.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          <span style={{ color: '#666688' }}>·  </span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Pattern grid item component
export const PatternItem = ({ item }) => (
  <div className="p-3 border-r border-b" style={{ borderColor: '#1e1e2e' }}>
    <h4
      className="text-sm font-bold mb-1"
      style={{ color: '#f0c040' }}
    >
      {item.heading}
    </h4>
    <p className="text-xs" style={{ color: '#666688', lineHeight: '1.5' }}>
      {item.desc}
    </p>
    <div
      className="text-xs mt-1"
      style={{ color: '#40c8f0', fontFamily: 'monospace' }}
    >
      {item.signal}
    </div>
  </div>
);

// Complexity table component
export const ComplexityTable = ({ rows }) => {
  const getColorClass = (colorClass) => {
    const colorMap = {
      on: '#40f090',
      on2: '#f0c040',
      ologn: '#40c8f0',
      onlogn: '#a0c0ff',
      on2c: '#f04060',
    };
    return colorMap[colorClass] || '#b0b0c8';
  };

  return (
    <div className="overflow-x-auto p-1">
      <table className="w-full border-collapse" style={{ fontSize: '0.78rem', fontFamily: 'monospace' }}>
        <thead>
          <tr style={{ background: '#0d0d18' }}>
            <th
              className="p-2 text-left font-bold text-xs uppercase tracking-wide"
              style={{ color: '#666688' }}
            >
              Algorithm / Structure
            </th>
            <th
              className="p-2 text-left font-bold text-xs uppercase tracking-wide"
              style={{ color: '#666688' }}
            >
              Time
            </th>
            <th
              className="p-2 text-left font-bold text-xs uppercase tracking-wide"
              style={{ color: '#666688' }}
            >
              Space
            </th>
            <th
              className="p-2 text-left font-bold text-xs uppercase tracking-wide"
              style={{ color: '#666688' }}
            >
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #1a1a28' }} className="hover:bg-opacity-50" onMouseEnter={(e) => e.currentTarget.style.background = '#14141f'} onMouseLeave={(e) => e.currentTarget.style.background = ''}>
              <td className="p-2" style={{ color: '#b0b0c8' }}>
                {row.algo}
              </td>
              <td className="p-2" style={{ color: getColorClass(row.timeClass) }}>
                {row.time}
              </td>
              <td className="p-2" style={{ color: getColorClass(row.spaceClass) }}>
                {row.space}
              </td>
              <td className="p-2" style={{ color: '#b0b0c8' }}>
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
