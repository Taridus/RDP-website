import styled from "styled-components";
import angelFivem from "../../assets/angeFivem.png";
export const FivemSection = styled.section`
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
    background-repeat: no-repeat;
    right: 0;
    top: 10%;
    opacity: 0.8;
    z-index: -1;
    background-image: url(${angelFivem});
    background-position-x: right;
    background-position: left;
    animation: cardIcon 8s linear infinite;
  }
  .title-container {
    margin: 10em 0;
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
      margin-bottom: 3em;
    }
  }
  h5 {
    font-family: var(--font-heading);
    font-size: var(--f-size-md);
    margin-bottom: 2em;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .profile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0 7em;
  }

  .cityBg {
    bottom: 0.8em;
    position: absolute;
  }
  footer {
    margin-top: 18em;
  }
  a {
    i {
      transform: rotate(0) !important;
    }
  }
  @media (max-width: 550px) {
    &::after,
    &::before {
      background-size: 100%;
    }
    &::before {
      top: 50%;
    }
    &::after {
      bottom: -5%;
    }
    p {
      max-width: 30ch;
    }
  }
  @media (max-width: 890px) {
    &::before {
      top: 0;
      background-size: 40%;
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
