import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { VipSection } from "../styles/pages/vip";
import data from "../../data.json";
import Aos from "aos";
import "aos/dist/aos.css";
const Vip = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <VipSection>
      <div className="title-container" data-aos="fade-up">
        <h2>
          <span>torne-se</span>
          <span>vip</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Torne-se Vip na comunindade mais quente do discord. Apoie o servidor e
          receba privilégios exclusivos.
        </p>
      </div>

      <div className="card-container">
        <Card
          title={"Premium"}
          benefits={data.premium}
          price={data.prices[0].price}
          color={"red"}
          icon={"diamondRed"}
        />
        <Card
          title={"Diamond"}
          benefits={data.diamond}
          price={data.prices[1].price}
          color={"blue"}
          icon={"diamondBlue"}
        />
      </div>

      <Footer />
    </VipSection>
  );
};

export default Vip;
