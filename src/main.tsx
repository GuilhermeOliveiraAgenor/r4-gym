import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/styles.css";
import Home from './pages/Home.tsx';
import Program from './pages/Hero.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Program />
  </StrictMode>,
)
