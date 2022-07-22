import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  z-index: 20;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  .title-container {
    margin: 17em 0;
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
  h5 {
    font-size: var(--f-size-md);
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .profile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 4em;
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
