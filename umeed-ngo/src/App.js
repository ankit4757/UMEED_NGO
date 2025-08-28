import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import SliderImage from "./components/SliderImage";
import About from "./components/About";
import Projects from "./components/Projects";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Refs for smooth scrolling
  const sliderRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const donateRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = {
    home: sliderRef,
    about: aboutRef,
    projects: projectsRef,
    donate: donateRef,
    contact: contactRef,
  };

  return (
    <Router>
      {/* Navbar passes refs to scroll */}
      <NavBar scrollRefs={scrollRefs} />

      {/* Sections */}
      <div ref={sliderRef}>
        <SliderImage />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={donateRef}>
        <Donate />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
