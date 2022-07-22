import React, { useEffect } from "react";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import { HomeSection } from "../styles/pages/home";
import rdpLogo from "../assets/logo.png";
import Footer from "../components/Footer";
import data from "../../data.json";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeSection>
      <div className="hero">
        <div
          className="hero-wrapper"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={rdpLogo} alt="" className="logo" />
          <h2 data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">
            reino da perdição
          </h2>
          <ButtonPrimary
            title="Descobrir"
            icon={"-arrow-back"}
            link={"#find"}
            target={"self"}
          />
        </div>
      </div>
      <div className="hero-subsection">
        <div className="hero-subsection__stats">
          <div className="stats-box" data-aos="fade-left">
            <h5>{data.homeInfo[0].membros}</h5>
            <span>Membros</span>
          </div>
          <div className="stats-box" data-aos="fade-up">
            <h5>{data.homeInfo[1].donos}</h5>
            <span>Donos</span>
          </div>
          <div className="stats-box" data-aos="fade-right">
            <h5>{data.homeInfo[2].mensagens}</h5>
            <span>Mensagens</span>
          </div>
        </div>
        <h2 data-aos="fade-up">
          <span>Perca-se</span>
          <span>na comunidade</span>
        </h2>
        <p data-aos="fade-up" id="find">
          RDP é uma comunidade no Discord de diversão aberta, focada em promover
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

        <div className="svg">
          <svg
            width="218"
            height="644"
            viewBox="0 0 218 644"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-75.2105 383.262L-126.122 434.174L-127.536 435.588L-126.122 437.002L-38.441 524.683L-37.0268 526.097L-35.6126 524.683L15.2992 473.772L13.8849 472.357L-37.0268 523.269L-124.708 435.588L-73.7963 384.676L-75.2105 383.262Z"
                fill="white"
              />
            </g>
            <g opacity="0.2">
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.1692 439.83L-8.74251 490.742L-10.1567 492.156L-8.74251 493.571L78.9387 581.252L80.3529 582.666L81.7671 581.252L132.679 530.34L131.265 528.926L80.3529 579.838L-7.3283 492.156L43.5834 441.245L42.1692 439.83Z"
                fill="white"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.1276 373.362L-32.7841 424.274L-34.1984 425.688L-32.7841 427.102L54.8971 514.784L56.3113 516.198L57.7255 514.784L108.637 463.872L107.223 462.458L56.3113 513.37L-31.3699 425.688L19.5418 374.777L18.1276 373.362Z"
                fill="white"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-5.91412 306.894L-56.8258 357.806L-58.24 359.22L-56.8258 360.634L30.8554 448.316L32.2696 449.73L33.6838 448.316L84.5955 397.404L83.1813 395.99L32.2696 446.901L-55.4116 359.22L-4.49991 308.309L-5.91412 306.894Z"
                fill="white"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-29.9557 240.426L-80.8675 291.338L-82.2817 292.752L-80.8675 294.166L6.81379 381.848L8.228 383.262L9.64221 381.848L60.5539 330.936L59.1397 329.522L8.228 380.433L-79.4532 292.752L-28.5415 241.84L-29.9557 240.426Z"
                fill="white"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-53.9974 173.958L-104.909 224.87L-106.323 226.284L-104.909 227.698L-17.2278 315.38L-15.8136 316.794L-14.3994 315.38L36.5123 264.468L35.0981 263.054L-15.8136 313.965L-103.495 226.284L-52.5832 175.372L-53.9974 173.958Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <Footer />
    </HomeSection>
  );
};

export default Home;
