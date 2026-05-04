// Theme colors matching the original design
export const theme = {
  bg: '#0a0a0f',
  surface: '#111118',
  border: '#1e1e2e',
  accent: '#f0c040',
  accent2: '#40c8f0',
  accent3: '#f04060',
  green: '#40f090',
  text: '#e0e0f0',
  muted: '#666688',
  darkBg: '#13131e',
  hoverBg: '#1a2030',
  cardText: '#b0b0c8',
  bruteText: '#c080a0',
  tipText: '#80c0a0',
};

// Tailwind would need custom colors in config, but we can use inline styles strategically
export const tailwindConfig = {
  extend: {
    colors: {
      'dsa-bg': theme.bg,
      'dsa-surface': theme.surface,
      'dsa-border': theme.border,
      'dsa-accent': theme.accent,
      'dsa-accent2': theme.accent2,
      'dsa-accent3': theme.accent3,
      'dsa-green': theme.green,
      'dsa-text': theme.text,
      'dsa-muted': theme.muted,
    },
  },
};
