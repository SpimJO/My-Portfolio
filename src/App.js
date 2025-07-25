import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-black min-h-screen font-sans scroll-smooth">
        <Navbar />
        <main>
          <Home id="home" />
          <About id="about" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </Router>
  );
}