import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "./styles";
import rdpLogo from "../../assets/logo.png";
const Header = () => {
  return (
    <Heading className="header">
      <Link to="/" className="brand">
        <img src={rdpLogo} alt="" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>Início</span>
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/vip">
              <span>Vips</span>
              <span>Vips</span>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <span>Cargos</span>
              <span>Cargos</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
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
