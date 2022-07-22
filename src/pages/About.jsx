import React, { useEffect } from "react";
import Footer from "../components/Footer";
import ProfileCard from "../components/Profile";
import { AboutSection } from "../styles/pages/about";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <AboutSection>
      <div className="title-container" data-aos="fade-up">
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
      <div className="profile-wrapper">
        <ProfileCard name="king" />
        <ProfileCard name="imp" />
      </div>

      <Footer />
    </AboutSection>
  );
};

export default About;
