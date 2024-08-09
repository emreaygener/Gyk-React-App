import "../styles/Main.css";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import Crew from "./crew/Crew";
import ServicesPosts from "./servicesPosts/ServicesPosts";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Gyk-React-App" element={<Homepage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/services" element={<ServicesPosts />} />

        <Route path="*" element={<h1>Site on progress..</h1>} />
      </Routes>
    </main>
  );
}
