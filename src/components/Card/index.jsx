import React from "react";
import { CardContainer } from "./style";
import redDiamond from "../../assets/redDiamond.svg";
import blueDiamond from "../../assets/blueDiamond.svg";
import skullIcon from "../../assets/skullIcon.png";
import handIcon from "../../assets/handIcon.png";

const Card = ({ title, benefits, price, color, icon }) => {
  const itens = benefits.map((benefit) => (
    <li key={benefit.id}>{benefit.benefit}</li>
  ));
  let diamondColor, cardIcon, hasBrush;
  const setBrushColor = (color) => {
    return (diamondColor = color === "red" ? "red" : "blue");
  };

  const setIcon = (icon) => {
    switch (icon) {
      case "diamondRed":
        cardIcon = redDiamond;
        hasBrush = true;
        break;
      case "diamondBlue":
        cardIcon = blueDiamond;
        hasBrush = true;

        break;
      case "skull":
        cardIcon = skullIcon;
        hasBrush = false;
        break;
      case "hand":
        cardIcon = handIcon;
        hasBrush = false;
        break;
    }
  };

  setBrushColor(color);
  setIcon(icon);

  return (
    <CardContainer data-aos="fade-left">
      <div className="diamondIcon">
        <div
          className={
            hasBrush === true
              ? diamondColor === "red"
                ? "diamondIcon__iconred"
                : "diamondIcon__iconblue"
              : "diamondIcon__iconNoBrush"
          }
        >
          <div className="cardIcon">
            <img
              src={cardIcon}
              alt=""
              className={title == "Posse" ? "card-posse" : "card"}
            />
          </div>
        </div>
      </div>
      <h3>{title == "Lord" ? "Lord da perdição" : title}</h3>
      <div
        className="benefits-container"
        data-aos="fade-left"
        data-aos-delay="50"
      >
        <h4>Vantagens</h4>
        <ul>{itens}</ul>
        <span>R$ {price}</span>
      </div>
      <span className="titleBG">{title}</span>
    </CardContainer>
  );
};

export default Card;
