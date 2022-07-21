import styled from "styled-components";
import bgRed from "../../assets/postRedBg.png";
import bgRed2 from "../../assets/postRedBg2.png";

export const PostsSection = styled.section`
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
    background-image: url(${bgRed});
    background-repeat: no-repeat;
    background-position-x: left;
    top: 20%;
    opacity: 0.5;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bgRed2});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    right: 0;
    bottom: 15%;
    opacity: 0.5;
    z-index: -1;
  }
  .title-container {
    margin: 15em 0;
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
    }
  }
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 10em;
    position: relative;
    margin-bottom: 2em;
    .card-posse {
      transform: translateY(50px) rotate(-20deg);
    }
  }
`;
