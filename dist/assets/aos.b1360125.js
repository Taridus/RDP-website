import{s as t}from"./index.20bd4990.js";const r=t.footer`
  margin-top: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 6em 2em;
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
    filter: blur(70px) opacity(0.8);
    left: 0;
    right: 0;
    bottom: -10px;
    border-radius: 100%;
    opacity: 0.9;
    margin: 0 auto;
  }
  i {
    cursor: pointer;
    color: var(--white);
  }
  .footer-icons {
    font-size: 1.5em;
    display: flex;
    gap: 0.5em;
    transition: var(--transition);
    &::before {
      content: "";
      transition: var(--transition);
    }
    a:hover {
      transform: scale(1.1) translateY(-5px);
      transition: var(--transition);
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--dark-red);
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(20px) opacity(0.8);
        z-index: -2;
        transition: var(--transition);
      }
    }
  }
`,e=t.p`
  color: var(--white);
  text-transform: uppercase;
  font-family: var(--font-body);
  font-weight: 300;
`;export{e as B,r as F};
