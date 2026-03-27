import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // limpeza (boa prática)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className="nav__logo">
          <a href="/">
            <img src={logo} alt="R4 Gym Curitiba" />
          </a>
        </div>

        <ul className="nav__links">
          <li className="link">
            <a href="/">Menu</a>
          </li>
          <li className="link">
            <a href="/programas">Programas</a>
          </li>
          <li className="link">
            <a href="/planos">Planos</a>
          </li>
          <li className="link">
            <a href="/sobre">Sobre</a>
          </li>
          <li className="link">
            <a href="/localizacao">Localização</a>
          </li>
        </ul>

        <a href="https://wa.me/5541996289080?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank" rel="noopener noreferrer">
          <button className="btn">Aula Experimental</button>
        </a>

        {/* icon mobile */}
        <div className="menu__icon" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </nav>

      {/* overlay */}
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      {/* menu mobile */}
      <div className={`mobile__menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={toggleMenu}>
            <a href="/">Menu</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/programas">Programas</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/planos">Planos</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/sobre">Sobre</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/localizacao">Localização</a>
          </li>
        </ul>
        
          <button className="btn mobile__btn">
            <a
          href="https://wa.me/5541996289080?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental."
          target="_blank"
          rel="noopener noreferrer">
            Aula Experimental
            </a>
          </button>
          
      </div>
    </>
  );
}
