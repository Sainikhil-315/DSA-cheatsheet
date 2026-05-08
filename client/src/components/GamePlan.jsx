import React from 'react';

export default function GamePlan() {
  const steps = [
    'Read problem fully. Note constraints (n ≤ 10⁵ → O(n log n) or better; n ≤ 10³ → O(n²) ok)',
    'Brute force it mentally first. Write pseudocode.',
    'Look for pattern: sorted? → BS/2ptr. Substring? → Window. Count? → HashMap. All? → Backtrack. Optimal? → DP/Greedy.',
    'Code brute if optimal not obvious. Partial marks > no submission.',
    'Edge cases: empty input, n=1, all same elements, INT overflow (use long long).',
  ];

  return (
    <div className="dsa-gameplan">
      <div className="dsa-gameplan-title">⚡ TOMORROW GAME PLAN</div>
      <div className="dsa-gameplan-steps">
        {steps.map((step, idx) => (
          <div key={idx}>{idx + 1}. {step}</div>
        ))}
      </div>
    </div>
  );
}