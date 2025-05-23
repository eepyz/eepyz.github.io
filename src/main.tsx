import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import HearimProject from './pages/projects/HearimProject.tsx';
import VsggProject from './pages/projects/VsggProject.tsx';
import DesserbeeProject from './pages/projects/DesserbeeProject.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hearim" element={<HearimProject />} />
        <Route path="/vsgg" element={<VsggProject />} />
        <Route path="/desserbee" element={<DesserbeeProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
