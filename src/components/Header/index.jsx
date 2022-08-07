import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "./styles";
import rdpLogo from "../../assets/logo.png";
const Header = () => {
  function toggleMenu() {
    const nav = document.getElementById("nav");
    const btnToggle = document.querySelector(".menu__toggle");
    nav.classList.toggle("active");
    btnToggle.classList.toggle("toggle");
  }
  return (
    <Heading className="header">
      <Link to="/" className="brand">
        <img src={rdpLogo} alt="" />
      </Link>
      <div className="menu__toggle" onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
        <i className="bx bx-x"></i>
      </div>
      <nav id="nav">
        <ul>
          <li className="nav-link" onClick={toggleMenu}>
            <Link to="/">
              <span>Início</span>
              <span>Início</span>
            </Link>
          </li>
          <li className="nav-link" onClick={toggleMenu}>
            <Link to="/vip">
              <span>Vips</span>
              <span>Vips</span>
            </Link>
          </li>
          <li className="nav-link" onClick={toggleMenu}>
            <Link to="/posts">
              <span>Cargos</span>
              <span>Cargos</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/fivem" onClick={toggleMenu}>
              <span>Fivem</span>
              <span>Fivem</span>
            </Link>
            <span className="warn-new">Novo!</span>
          </li>
          <li className="nav-link">
            <Link to="/about" onClick={toggleMenu}>
              <span>Sobre</span>
              <span>Sobre</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Heading>
  );
};

export default Header;
