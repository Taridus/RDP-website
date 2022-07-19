import React from "react";
import { Btn } from "./style";
const ButtonPrimary = ({ title, icon, link }) => {
  return (
    <Btn href={`${link}`}>
      <span>
        {title} <i className={`bx bx${icon}`}></i>
      </span>
      <span>
        {title} <i className={`bx bx${icon}`}></i>
      </span>
    </Btn>
  );
};

export default ButtonPrimary;
