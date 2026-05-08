import React from 'react';
import { TOC_ITEMS } from '../data/dsaData';

export default function TOC() {
  return (
    <nav className="dsa-toc">
      {TOC_ITEMS.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}