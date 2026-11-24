import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Search from './pages/Search.tsx';
import Metagame from './pages/Metagame.tsx'
import Deck from './pages/Deck.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/metagame/:metagameId" element={<Metagame />} />
        <Route path="/deck/:deckId" element={<Deck />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
