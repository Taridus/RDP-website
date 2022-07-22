import styled from "styled-components";
import redBG from "../../assets/vipRedBG.png";

export const AboutSection = styled.section`
  width: 100%;
  z-index: 20;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${redBG});
    background-repeat: no-repeat;
    right: 0;
    top: -20%;
    opacity: 0.5;
    z-index: -1;
    background-position-x: right;
    background-position: left;
    rotate: 180deg;
  }
  .title-container {
    margin: 17em 0;
    display: grid;
    place-items: center;
    h2 {
      font-family: var(--font-heading);
      font-size: var(--f-size-lg);
      text-transform: uppercase;
      margin-bottom: 1em;
      span:nth-child(2) {
        color: var(--dark-red);
        margin-left: 0.4em;
      }
    }
    p {
      width: 50ch;
      text-align: center;
      line-height: 22px;
      margin-bottom: 5em;
    }
  }
  h5 {
    font-family: var(--font-heading);
    font-size: var(--f-size-md);
    margin-bottom: 2em;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .profile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0 7em;
  }
  a {
    i {
      transform: rotate(0) !important;
    }
  }
  @media (max-width: 600px) {
    .profile-wrapper {
      width: 70%;
      gap: 9em;
      flex-direction: column;
      align-items: center;
    }
  }
`;
