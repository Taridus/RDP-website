import React from "react";
import Footer from "../components/Footer";
import { AboutSection } from "../styles/pages/about";
const About = () => {
  return (
    <AboutSection>
      <div className="title-container">
        <h2>
          <span>sobre</span>
          <span>nós</span>
        </h2>
        <p>
          Obtenha os cargos mais quentes do reino, ajude a comunidade e ganhe
          contúdos exclusivos.
        </p>
      </div>
      <h5>Staff</h5>
      <Footer />
    </AboutSection>
  );
};

export default About;
