import { createGlobalStyle } from "styled-components";
import overlayBody from "../assets/overlay.png";

export default createGlobalStyle`
  :root{
    --dark-blue: #0F171D;
    --dark-red: #9b2c24;
    --blue: #A1EEFF;
    --white: #E2E2E2;
    --white-transparent: #ddddddab;
    --font-heading: 'Cinzel', serif;
    --font-body:  'Poppins', sans-serif;
    --font-logo: 'Squada One', cursive;
    --f-size-sm: 1.5em;
    --f-size-md: 2.25em;
    --f-size-lg: 3.375em;
    --transition: 0.5s cubic-bezier(0.365, 0.183, 0.153, 0.846);
  }      

  *{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-size: 15px;
    margin: 0 auto;
    background-color: var(--dark-blue);
    color: var(--white);
    position: relative;
    scroll-behavior: smooth;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${overlayBody});
      opacity: 0.2;
    }
    p{
      letter-spacing: 1px;
      font-family: var(--font-body);
      font-weight: 200;
    }
  }
  
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .1;
  }
  .overlayBd{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: .2;
  }
  @media (max-width: 550px) {
    body{
      font-size: 12px;
    }
    h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      p {
        max-width: 40ch;
      } 
  }
`;
