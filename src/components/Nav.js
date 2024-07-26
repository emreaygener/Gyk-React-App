import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <menu>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <h3>Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" activeClassName="active">
            <h3>Crew</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            <h3>Services</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            <h3>Blog</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" activeClassName="active">
            <h3>Careers</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            <h3>Contact</h3>
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}
