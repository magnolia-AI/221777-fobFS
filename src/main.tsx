import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import JournalenPage from './pages/JournalenPage.tsx'
import ReceptPage from './pages/ReceptPage.tsx'
import MeddelandenPage from './pages/MeddelandenPage.tsx'
import BokadeTiderPage from './pages/BokadeTiderPage.tsx'
import IntygPage from './pages/IntygPage.tsx'
import TjansterPage from './pages/TjansterPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journalen" element={<JournalenPage />} />
        <Route path="/recept" element={<ReceptPage />} />
        <Route path="/meddelanden" element={<MeddelandenPage />} />
        <Route path="/bokade-tider" element={<BokadeTiderPage />} />
        <Route path="/intyg" element={<IntygPage />} />
        <Route path="/tjanster" element={<TjansterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
