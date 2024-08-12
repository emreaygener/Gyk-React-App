import "../styles/Main.css";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import Crew from "./crew/Crew";
import ServicesPosts from "./servicesPosts/ServicesPosts";
import Blog from "./blog/Blog";
import BlogDetail from "./blog/blogDetail/BlogDetail";
import Form from "./form/Form";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="/careers" element={<Form type="career" />} />
        <Route path="/contact" element={<Form type="contact" />} />

        <Route path="*" element={<h1>Site on progress..</h1>} />
      </Routes>
    </main>
  );
}
