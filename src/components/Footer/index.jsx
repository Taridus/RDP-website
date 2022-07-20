import React from "react";
import { FooterSection, BrandId } from "./style";
const Footer = () => {
  return (
    <FooterSection>
      <BrandId>rdp® 2022</BrandId>
      <div className="footer-icons">
        <i className="bx bxl-instagram"></i>
        <i className="bx bxl-discord-alt"></i>
      </div>
    </FooterSection>
  );
};

export default Footer;
