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
    <div className="mt-8 p-5 bg-yellow-950 bg-opacity-20 border border-yellow-400 border-opacity-30 rounded">
      <div className="text-sm font-bold text-yellow-400 mb-3 font-mono">
        ⚡ TOMORROW GAME PLAN
      </div>
      <div className="text-sm text-gray-400 leading-8 font-mono space-y-2">
        {steps.map((step, idx) => (
          <div key={idx}>
            {idx + 1}. {step}
          </div>
        ))}
      </div>
    </div>
  );
}
