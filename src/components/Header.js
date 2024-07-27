import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Header.css";
import logo from "../assets/img/logoheaderwide.jpeg";
import TogglerMenu from "./TogglerMenu";
import { useState, useEffect } from "react";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width > 808) {
      setMenuOpen(false);
      setMenuIcon("☰");
    }
  }, [window.innerWidth]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("☰");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? "☰" : "✖");
  };

  return (
    <>
      <header>
        <NavLink to="/" end>
          <img id="logoImgHeader" src={logo} alt="logo" />
        </NavLink>
        {width > 808 ? (
          <Nav />
        ) : (
          <button className="menu-button" onClick={toggleMenu}>
            {menuIcon}
          </button>
        )}
      </header>
      {menuOpen && <TogglerMenu />}
    </>
  );
}
