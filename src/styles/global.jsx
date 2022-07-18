import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --dark-blue: #0F171D;
    --dark-red: #792A24;
    --white: #E2E2E2;
    --font-heading: 'Bespoke Slab', sans-serif;
    --font-body:  'Poppins', sans-serif;
  }      

  *{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-size: 15px;
    max-width: 1440px;
    margin: 0 auto;
  }
`;
