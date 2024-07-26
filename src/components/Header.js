import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Header.css";
import logo from "../assets/img/logoheaderwide.jpeg";

export default function Header() {
  return (
    <header>
      <NavLink to="/" end>
        <img src={logo} alt="logo" />
      </NavLink>
      <Nav />
    </header>
  );
}
