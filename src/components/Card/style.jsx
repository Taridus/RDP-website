import styled from "styled-components";
import redBrush from "../../assets/kindpng_99339.png";
import blueBrush from "../../assets/blueBrush.png";

export const CardContainer = styled.div`
  position: relative;
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
    &__icon {
      position: relative;
      .diamond {
        z-index: 2;
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
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    border: 1px solid rgba(170, 170, 170, 0.089);
    padding: 5em;
    display: flex;
    flex-direction: column;
    h4 {
      text-transform: uppercase;
      font-family: var(--font-body);
      font-size: var(--f-size-sm);
      letter-spacing: 5px;
    }
    li {
      list-style: disc;
      font-family: var(--font-body);
      font-weight: 300;
      font-style: italic;
      letter-spacing: 1px;
      margin: 2.5em 1em 0em 2em;
      width: 43ch;
    }
    span {
      font-family: var(--font-body);
      font-weight: 500;
      align-self: flex-end;
      margin-top: 3em;
    }
  }
`;
