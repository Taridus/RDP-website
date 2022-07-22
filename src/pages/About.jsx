import React, { useEffect } from "react";
import Footer from "../components/Footer";
import ProfileCard from "../components/Profile";
import { AboutSection } from "../styles/pages/about";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
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
        <p data-aos="fade-up" data-aos-delay="150">
          RDP é a maior comunidade hot no Discord do Brasil, focada em promover
          momentos de lazer aos membros com entretenimento, interações, torneios
          de jogos e muita treta!
        </p>
        <ButtonPrimary
          title={"Junte-se"}
          icon={"l-discord-alt"}
          link={"https://discord.gg/RDP"}
          target={"blank"}
          className="btn-discord"
        />
      </div>

      <h5>Donos</h5>
      <div className="profile-wrapper">
        <ProfileCard name="king" />
        <ProfileCard name="imp" />
      </div>

      <Footer />
    </AboutSection>
  );
};

export default About;
