import styled from "styled-components";
import redBrush from "../../assets/redBrush.png";
import blueBrush from "../../assets/blueBrush.png";

export const CardContainer = styled.div`
  position: relative;
  max-width: 50%;
  margin: 0 auto;

  .titleBG {
    position: absolute;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    right: -17%;
    top: 0.55em;
    letter-spacing: 15px;
    font-size: 5.594em;
    font-family: var(--font-body);
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0.1;
    color: var(--white-transparent);
  }
  .diamondIcon {
    position: absolute;
    right: 0;
    width: 150px;
    z-index: 30;
    animation: cardIcon 4s linear infinite;

    .cardIcon {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
    &__iconred {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 90%;
        height: 100%;
        background-image: url(${redBrush});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.3;
        left: 25%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--dark-red);
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(50px) opacity(0.8);
        z-index: -2;
      }
    }
    &__iconblue {
      position: relative;
      z-index: 30;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${blueBrush});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.2;
        left: 15%;
        top: -15%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--blue);
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(50px) opacity(0.5);
        z-index: -2;
      }
    }
    &__iconNoBrush {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.2;
        left: 15%;
        top: -15%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--dark-red);
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(50px) opacity(0.5);
        z-index: -2;
      }
      .card {
        transform: rotate(20deg) translateX(30px);
      }
      .cardIcon {
        transform: rotate(0deg) translateY(-60px);
      }
    }
  }
  h3 {
    font-family: var(--font-body);
    font-size: var(--f-size-md);
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .benefits-container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background: #afafaf;
    background: -moz-radial-gradient(
      top right,
      rgba(170, 170, 170, 0.089),
      rgba(7, 3, 3, 0.089)
    );
    background: radial-gradient(
      to bottom left,
      rgba(170, 170, 170, 0.089),
      rgba(7, 3, 3, 0.089)
    );
    background: -webkit-radial-gradient(
      top right,
      rgba(170, 170, 170, 0.089),
      rgba(0, 0, 0, 0.089)
    );
    border: 1px solid rgba(170, 170, 170, 0.089);
    padding: 4em 6em 4em 4em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    h4 {
      text-transform: uppercase;
      font-family: var(--font-body);
      font-size: var(--f-size-sm);
    }
    li {
      list-style: disc;
      font-family: var(--font-body);
      font-weight: 300;
      font-style: italic;
      letter-spacing: 1px;
      margin: 2.5em 1em 0em 2em;
      max-width: 43ch;
      min-width: 30ch;
    }
    span {
      font-family: var(--font-body);
      font-weight: 500;
      align-self: flex-end;
      margin-top: 3em;
    }
  }
  @media (max-width: 550px) {
    max-width: 100%;
    .titleBG {
      right: -22%;
      top: 15%;
      letter-spacing: 5px;
    }
    .diamondIcon {
      width: 100px;
    }
    h3 {
      max-width: 15ch;
    }
    .benefits-container {
      padding: 1.5em;
      li {
        width: 30ch;
      }
    }
  }
  @media (min-width: 550px) and (max-width: 840px) {
    .titleBG {
      opacity: 0;
    }
    .benefits-container {
      padding: 1em;
      min-width: 400px;
    }
  }
`;
