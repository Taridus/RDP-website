import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 4em;
  width: 100%;
  z-index: 100;
  position: absolute;
  .brand {
    z-index: 100;

    color: var(--white);
    font-family: var(--font-logo);
    font-size: var(--f-size-md);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      transform: scale(1.1);
      transition: var(--transition);
    }
  }
  nav ul {
    display: flex;
    gap: 4em;
    overflow: hidden;
    z-index: 100;

    li {
      position: relative;
      z-index: 100;
    }
    a {
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
`;
