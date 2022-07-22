import styled from "styled-components";
import bgHome from "../../assets/bgHome.png";
import bgHomeMobile from "../../assets/bgHomeMobile.png";

export const HomeSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  .hero {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
    padding-bottom: 10em;
    z-index: 1;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 15%;
      background-color: var(--dark-blue);
      bottom: -10%;
      filter: blur(25px);
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${bgHome});
      background-size: cover;
      opacity: 0.5;
    }
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 20;

      .logo {
        font-family: var(--font-logo);
        margin: 8em auto 0;
        position: relative;
        transform: translateX(-8%) translateY(50px);
        filter: saturate(50%);
        width: 70vh;
      }

      h2 {
        font-size: var(--f-size-sm);
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      a {
        transform: translateY(90px);
      }
    }
  }
  .bg-container {
    position: absolute;
    width: 100%;
    top: -20vh;
    z-index: -2;
    opacity: 0.7;
    min-height: 100vh;
    height: 100vh;
    img {
      max-width: 100%;
    }
  }
  .hero-subsection {
    height: 100vh;
    padding: 5em 4em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    &__stats {
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      font-family: var(--font-body);
      .stats-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em 3em;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background: #afafaf;
        background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
        background: radial-gradient(to bottom left, #d4d4d411, #11060626);
        background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
        border: 1px solid rgba(170, 170, 170, 0.089);
        h5 {
          font-weight: 600;
          font-size: var(--f-size-sm);
          margin-bottom: 0.2em;
        }
      }
    }
    h2 {
      font-family: var(--font-heading);
      font-size: var(--f-size-lg);
      text-transform: uppercase;
      margin: 3em 0 1em;
      z-index: 2;
      span:nth-child(1) {
        color: var(--dark-red);
        margin-right: 0.4em;
      }
    }
    p {
      z-index: 2;
      text-align: center;
      width: 50ch;
      margin-bottom: 4em;
      line-height: 22px;
      font-family: var(--font-body);
    }
    a {
      i {
        transform: rotate(0) !important;
      }
    }
    .svg {
      position: absolute;
      left: 0;
      top: 10%;
      opacity: 0.5;
    }
  }
  @media (max-width: 500px) {
    .hero::after {
      overflow: hidden;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${bgHomeMobile});
      background-size: cover;
      opacity: 0.5;
    }
    .hero-wrapper {
      margin-top: 4em;
    }
    .logo {
      max-width: 50vh;
      transform: translateY(-10px) translateX(-20px) !important;
    }
    .hero-subsection__stats {
      flex-direction: column;
      gap: 1em;
    }
    .hero-subsection {
      margin-bottom: 25em;
      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      p {
        max-width: 40ch;
      }
      svg {
        width: 70%;
      }
    }
  }
`;
