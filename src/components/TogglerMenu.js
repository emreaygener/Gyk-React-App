import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default function TogglerMenu(props) {
  return (
    <>
      <nav
        className="nav"
        style={{ marginBottom: "1.2rem", justifyContent: "center" }}
      >
        <menu>
          <li>
            <NavLink to="/" onClick={props.toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={props.toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" onClick={props.toggleMenu}>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={props.toggleMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={props.toggleMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={props.toggleMenu}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={props.toggleMenu}>
              Contact
            </NavLink>
          </li>
        </menu>
      </nav>
    </>
  );
}
