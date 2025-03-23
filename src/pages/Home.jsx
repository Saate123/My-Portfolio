import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
