import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { FivemSection } from "../styles/pages/fivem";
import { FooterSection } from "../components/Footer/style";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Aos from "aos";
import "aos/dist/aos.css";
const Fivem = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <FivemSection>
      <div className="title-container" data-aos="fade-up">
        <h2>
          <span>Arme-se no</span>
          <span>Fivem</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Agora as brincadeiras ficaram mais imersivas. Temos uma cidade no GTA
          RP pronta pra novas aventuras. Entre agora mesmo no nosso servidor e
          desfrute de mais um lugar para a Perdição.
        </p>
      </div>

      <h5 data-aos="fade-up">
        <span>rdp city</span>
        <span>disponível agora</span>
      </h5>
      <ButtonPrimary
        title={"Acessar"}
        icon={"l-discord-alt"}
        link={"https://discord.gg/RDP"}
        target={"blank"}
        className="btn-discord"
      />
      <div className="cityBg"></div>
      <FooterSection>
        <div className="footer-icons"></div>
      </FooterSection>
    </FivemSection>
  );
};

export default Fivem;
