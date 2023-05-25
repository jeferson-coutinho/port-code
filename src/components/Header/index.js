// Header.js

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header id="default">
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <Link to="/port">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/skills">Habilidades</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfólio</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
