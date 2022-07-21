import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { VipSection } from "../styles/pages/vip";
import data from "../data/benefits.json";
const Vip = () => {
  return (
    <VipSection>
      <div className="title-container">
        <h2>
          <span>torne-se</span>
          <span>vip</span>
        </h2>
        <p>
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
