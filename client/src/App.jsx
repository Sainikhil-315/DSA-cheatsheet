import React from 'react';
import './App.css';
import Header from './components/Header';
import TOC from './components/TOC';
import Section from './components/Section';
import PatternSection from './components/PatternSection';
import ComplexityTable from './components/ComplexityTable';
import GamePlan from './components/GamePlan';
import Footer from './components/Footer';
import {
  SECTIONS_DATA,
  SLIDING_WINDOW_DATA,
  BINARY_SEARCH_DATA,
  RECURSION_DATA,
  SORTING_DATA,
  LINKEDLIST_DATA,
  STACKQUEUE_DATA,
  TREES_DATA,
  GRAPHS_DATA,
  DP_DATA,
  GREEDY_DATA,
} from './data/dsaData';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" style={{ fontFamily: "'Syne', sans-serif" }}>
      <div className="screen-size">
        <Header />
        <TOC />

        {/* Render all sections */}
        {SECTIONS_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {SLIDING_WINDOW_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {BINARY_SEARCH_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {RECURSION_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {SORTING_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {LINKEDLIST_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {STACKQUEUE_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {TREES_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {GRAPHS_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {DP_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {GREEDY_DATA.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <PatternSection />

        <ComplexityTable />

        <GamePlan />

        <Footer />
      </div>
    </div>
  );
}
