// Header.js

import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function LittleHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <header id="little">
      {/* Sidebar */}
      <nav
        id="mySidebar"
        className={sidebarOpen ? "sidebar-open" : "sidebar-closed"}
      >
        <Link to="/port" className="bar-item" onClick={closeSidebar}>
          Home
        </Link>

        <Link to="/about" className="bar-item" onClick={closeSidebar}>
          Sobre
        </Link>

        <Link to="/skills" className="bar-item" onClick={closeSidebar}>
          Habilidades
        </Link>

        <Link to="/portfolio" className="bar-item" onClick={closeSidebar}>
          Portfólio
        </Link>

        <Link to="/contact" className="bar-item" onClick={closeSidebar}>
          Contato
        </Link>
      </nav>

      {/* Botão para abrir a Sidebar */}
      <button class="button" onClick={toggleSidebar}>
        ☰
      </button>

      <div className="logo"></div>
    </header>
  );
}

export default LittleHeader;
