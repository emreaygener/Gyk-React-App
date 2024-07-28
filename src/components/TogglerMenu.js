import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default function TogglerMenu() {
  return (
    <>
      <nav className="nav" style={{ marginBottom: "1.2rem" }}>
        <menu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/crew">Crew</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </menu>
      </nav>
    </>
  );
}
