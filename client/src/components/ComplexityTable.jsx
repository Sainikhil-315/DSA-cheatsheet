import React from 'react';
import { COMPLEXITY_TABLE } from '../data/dsaData';

const timeClassMap = {
  'text-cyan-400': 'tc-ologn',
  'text-blue-400': 'tc-onlogn',
  'text-green-400': 'tc-on',
  'text-red-400': 'tc-on2c',
};

export default function ComplexityTable() {
  return (
    <section className="dsa-section" id="complexity">
      <div className="dsa-section-header">
        <span className="dsa-num">16</span>
        <h2>Time Complexity Quick Ref</h2>
      </div>
      <div style={{ padding: '0 1px' }}>
        <table className="dsa-complexity-table">
          <thead>
            <tr>
              <th>Algorithm / Structure</th>
              <th>Time</th>
              <th>Space</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {COMPLEXITY_TABLE.map((row, idx) => (
              <tr key={idx}>
                <td>{row.algo}</td>
                <td className={timeClassMap[row.timeClass] || 'tc-on'}>{row.time}</td>
                <td>{row.space}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}