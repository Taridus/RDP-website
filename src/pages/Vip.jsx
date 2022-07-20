import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { VipSection } from "../styles/pages/vip";
import premium from "../data/vips.json";
import diamond from "../data/vips.json";

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
          benefits={premium.premium}
          price={120}
          color={"red"}
        />
        <Card
          title={"Diamond"}
          benefits={diamond.diamond}
          price={120}
          color={"blue"}
        />
      </div>

      <Footer />
    </VipSection>
  );
};

export default Vip;
