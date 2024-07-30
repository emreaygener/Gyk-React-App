import "../styles/Main.css";
import Slider from "./slider/Slider";
import Hero from "./hero/Hero";
import Clipboard from "./clipboard/Clipboard";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />

        <Route path="*" element={<h1>Site on progress..</h1>} />
      </Routes>
    </main>
  );
}
