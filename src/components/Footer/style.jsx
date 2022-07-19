import styled from "styled-components";

export const FooterSection = styled.footer`
  margin-top: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 4em;
  z-index: 20;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: var(--white-transparent);
    left: 0;
    right: 0;
    bottom: 20%;
    margin: 0 auto;
  }
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 100%;
    background-color: var(--dark-red);
    filter: blur(60px);
    left: 0;
    right: 0;
    bottom: -10px;
    border-radius: 100%;
    opacity: 0.9;
    margin: 0 auto;
  }
  i {
    cursor: pointer;
  }
  .footer-icons {
    font-size: 1.9em;
    display: flex;
    gap: 0.5em;
    transition: var(--transition);
    i:hover {
      transform: scale(1.1) translateY(-5px);
      transition: var(--transition);
    }
  }
`;

export const BrandId = styled.p`
  color: var(--white);
  text-transform: uppercase;
`;
