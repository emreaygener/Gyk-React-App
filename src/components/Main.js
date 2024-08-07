import "../styles/Main.css";
import Slider from "./slider/Slider";
import Hero from "./hero/Hero";
import Clipboard from "./clipboard/Clipboard";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./about/About";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Gyk-React-App" element={<Homepage />} />
        <Route path="/about/*" element={<About />} />

        <Route path="*" element={<h1>Site on progress..</h1>} />
      </Routes>
    </main>
  );
}
