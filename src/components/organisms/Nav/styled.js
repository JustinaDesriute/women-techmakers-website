import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  background: url("nav-bar.png") top center;
  background-size: cover; // cut part of the image for the top section

  .nav-inner {
    display: flex;
    padding: 20px;
  }

  .home-link {
    display: flex;
    align-items: center;
    margin-right: 24px;

    svg {
      width: 35px;
      path {
        fill: #ffffff;
      }
    }
  }

  .nav-link-container {
    display: flex;
    align-items: center;

    .nav-link {
      text-decoration: none;
      padding: 0 24px;
      color: #ffffff;
    }
  }

  .social-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;
