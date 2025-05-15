import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import {Index} from './pages/index.tsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
