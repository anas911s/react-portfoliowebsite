import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import {Index} from './pages/index.tsx';
import {About} from './pages/about/about.tsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
