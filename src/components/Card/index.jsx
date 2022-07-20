import React from "react";
import { CardContainer } from "./style";
import redDiamond from "../../assets/redDiamond.svg";
import blueDiamond from "../../assets/blueDiamond.svg";
const Card = ({ title, benefits, price, color }) => {
  const itens = benefits.map((benefit) => (
    <li key={benefit.id}>{benefit.benefit}</li>
  ));
  let diamondColor;

  const setDiamondColor = (color) => {
    return (diamondColor = color === "red" ? redDiamond : blueDiamond);
  };

  const setBrushColor = (color) => {
    return (diamondColor = color === "red" ? "red" : "blue");
  };

  console.log(setBrushColor(color));
  return (
    <CardContainer>
      <div className="diamondIcon">
        <div
          className={
            setBrushColor(color) == "red"
              ? "diamondIcon__iconred"
              : "diamondIcon__iconblue"
          }
        >
          <div className="diamond">
            <img src={setDiamondColor(color)} alt="" />
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      <div className="benefits-container">
        <h4>Vantagens</h4>
        <ul>{itens}</ul>
        <span>R$ {price}</span>
      </div>
      <span className="titleBG">{title}</span>
    </CardContainer>
  );
};

export default Card;
