import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [active, setActive] = useState(false);
  const Vision = () => (
    <>
      <article className="about-content">
        <h1>Our Vision</h1>
        <p>
          Our vision is to provide the best possible experience for our
          customers by offering the highest quality products and services. We
          strive to be a leader in the industry and to exceed the expectations
          of our customers.
        </p>
      </article>
    </>
  );
  const Mission = () => (
    <>
      <article className="about-content">
        <h1>Our Mission</h1>
        <p>
          Our mission is to provide the best possible products and services to
          our customers. We are committed to providing the highest quality
          products and services at competitive prices. We strive to create a
          positive and inclusive work environment for our employees and to
          support the communities in which we operate.
        </p>
      </article>
    </>
  );
  return (
    <>
      <nav id="about-nav">
        <NavLink to="vision" onClick={() => setActive(false)}>
          <h4 className={!active ? "active-nav" : ""}>Vision</h4>
        </NavLink>
        <NavLink to="mission" onClick={() => setActive(true)}>
          <h4 className={active ? "active-nav" : ""}>Mission</h4>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/vision" element={<Vision />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={<Vision />} />
      </Routes>
    </>
  );
}
