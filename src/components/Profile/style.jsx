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
    padding: 3em;
    &__icon {
      position: absolute;
      right: -20%;
      top: -15%;
    }
    &__outsideName {
      position: absolute;
      bottom: -28%;
      left: 0;
      letter-spacing: 15px;
      font-size: 5.594em;
      font-family: var(--font-body);
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0.1;
      color: var(--white-transparent);
    }
  }
  @media (max-width: 600px) {
    .profile-container {
      width: fit-content;
    }
  }
`;
