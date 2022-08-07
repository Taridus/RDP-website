import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 4em;
  width: 100%;
  z-index: 100;
  .brand {
    z-index: 100;
    color: var(--white);
    font-family: var(--font-logo);
    font-size: var(--f-size-md);
    text-decoration: none;
    transition: var(--transition);
    z-index: 100;
    img {
      transform: translateY(5px);
      max-width: 80px;
      filter: saturate(50%);
    }
    &:hover {
      transform: scale(1.1);
      transition: var(--transition);
    }
  }
  .menu__toggle {
    z-index: 300;
    font-size: 3em;
    cursor: pointer;
    display: none;
    .bx-menu {
      display: block;
    }
    .bx-x {
      display: none;
    }
  }
  nav {
    transition: var(--transition);
  }
  nav ul {
    display: flex;
    gap: 4em;
    overflow: hidden;
    z-index: 100;
    transition: var(--transition);

    li {
      position: relative;
      z-index: 100;
      .warn-new {
        color: red;
        font-family: var(--font-heading);
        font-size: 0.8em;
        animation: warnNew 3s linear infinite;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
    a {
      overflow: hidden;

      color: var(--white);
      display: block;
      font-family: var(--font-body);
      font-weight: 400;
      letter-spacing: 0.03em;
      text-decoration: none;
      text-transform: uppercase;
      transition: var(--transition);
    }
    li a span:nth-child(1) {
      display: block;
      position: absolute;
      transform: translateY(-20px);
      transition: var(--transition);
      visibility: hidden;
    }
    li a span:nth-child(2) {
      display: block;
      transform: translateY(0px);
      transition: var(--transition);
      visibility: visible;
    }
    li a:hover {
      transition: var(--transition);
      span:nth-child(1) {
        visibility: visible;
        transform: translateY(0);
        transition: var(--transition);
      }
      span:nth-child(2) {
        visibility: hidden;
        transform: translateY(20px);
        transition: var(--transition);
      }
    }
  }
  @media (max-width: 800px) {
    .brand {
      z-index: 200;
    }
    nav {
      position: absolute;
      background-color: #020201;
      top: 0;
      right: 0;
      width: 100%;
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 100;
      padding: 50px 0;
      visibility: hidden;
      transform: translateX(-100%);
      transition: var(--transition);
      ul {
        flex-direction: column;
        font-size: 2em;
        gap: 2em;
        margin-top: 2em;
        li a span:nth-child(1) {
          display: none;
          visibility: hidden;
        }
        li a:hover span:nth-child(2) {
          visibility: visible;
          transform: translateX(0) !important;
        }
      }
    }
    nav.active {
      visibility: visible;
      display: flex;
      transform: translateX(0%);
      transition: var(--transition);
    }
    .menu__toggle {
      display: block;
    }
    .menu__toggle.toggle {
      .bx-menu {
        display: none;
      }
      .bx-x {
        display: block;
      }
    }
  }
  @keyframes warnNew {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
