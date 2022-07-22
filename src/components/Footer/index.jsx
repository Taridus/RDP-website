import React from "react";
import { FooterSection, BrandId } from "./style";
const Footer = () => {
  return (
    <FooterSection>
      <BrandId>rdp® 2022</BrandId>
      <div className="footer-icons">
        <a href="https://google.com" target="_blank">
          <i className="bx bxl-discord-alt"></i>
        </a>
      </div>
    </FooterSection>
  );
};

export default Footer;
