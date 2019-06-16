import styled from "styled-components";

export const StyledHomeHero = styled.div`
  height: 100vh;
  background: url("WTM-hero.png") top center;
  background-size: cover;

  .content-wrapper {
    position: relative;
    top: 25%;
    text-align: center;

    .headline {
      font-family: "Playlist-Script";
      margin: 0;
      font-size: 72px;
      font-weight: 100;
      color: #ffffff;
    }

    .subheadline {
      color: #ffffff;
      font-size: 24px;
      margin: 0;
      font-family: "Open Sans Light";
    }

    .wtm-logo {
      width: 120px;
      display: block;
      margin: 16px auto 24px;
    }
  }
`;
