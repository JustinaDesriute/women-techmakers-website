import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;

  .nav-inner {
    display: flex;
    padding: 20px;
  }

  .home-link {
    display: flex;
    align-items: center;
    margin-right: 24px;

    svg {
      width: 50px;
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
