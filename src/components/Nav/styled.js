import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 20px;

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

  .navigation-link-container {
    display: flex;
    align-items: center;

    .nav-link {
      text-decoration: none;
      padding: 16px;
      color: #ffffff;
    }
  }

  .social-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;
