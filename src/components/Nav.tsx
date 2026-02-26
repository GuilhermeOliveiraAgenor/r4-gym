import { useState } from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <div className="nav__logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <ul className="nav__links">
          <li className="link"><a href="/">Menu</a></li>
          <li className="link"><a href="/program">Programas</a></li>
          <li className="link"><a href="/service">Planos</a></li>
          <li className="link"><a href="/about">Sobre</a></li>
          <li className="link"><a href="/review">Localização</a></li>
        </ul>

        <button className="btn">Comece Agora</button>

        {/* ICON MOBILE */}
        <div className="menu__icon" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* MENU MOBILE */}
      <div className={`mobile__menu ${isOpen ? "active" : ""}`}>
  <ul>
    <li onClick={toggleMenu}><a href="/">Menu</a></li>
    <li onClick={toggleMenu}><a href="/program">Programas</a></li>
    <li onClick={toggleMenu}><a href="/service">Planos</a></li>
    <li onClick={toggleMenu}><a href="/about">Sobre</a></li>
    <li onClick={toggleMenu}><a href="/review">Localização</a></li>
  </ul>

  <button className="btn mobile__btn">Comece Agora</button>
</div>
    </>
  );
}