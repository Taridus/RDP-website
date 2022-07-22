import styled from "styled-components";

export const Profile = styled.div`
  h6 {
    font-family: var(--font-body);
    font-size: var(--f-size-md);
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .avatar {
    max-width: 150px;
    min-height: 200px;
    img {
      max-width: 100%;
    }
  }
  .profile-container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    border: 1px solid rgba(170, 170, 170, 0.089);
    position: relative;
    padding: 3em 6em 3em 3em;
    &__icon {
      position: absolute;
      right: -40px;
      top: -60px;
      &::before {
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
    &__outsideName {
      position: absolute;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      right: -80px;
      top: 0em;
      letter-spacing: 15px;
      font-size: 5.594em;
      font-family: var(--font-body);
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0.1;
      color: var(--white-transparent);
    }
    &__social {
      transform: translateX(50px) translateY(30px);
      position: relative;
    }
    &__social a {
      color: var(--white-transparent);
      font-size: 1.5em;
      margin: 0 0.5em;
      opacity: 0.8;
      transition: var(--transition);
      padding: 0;
      &::before {
        content: "";
        transition: var(--transition);
      }
      &:hover {
        color: var(--white);
        opacity: 1;
        transition: var(--transition);
        border-radius: 50%;
        padding: 0.1em;
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
  }
  @media (max-width: 600px) {
    .profile-container {
      width: fit-content;
    }
  }
`;
