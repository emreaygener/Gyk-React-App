import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <menu>
        <li>
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <h3>Crew</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            <h3>Services</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <h3>Blog</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers">
            <h3>Careers</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <h3>Contact</h3>
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}
