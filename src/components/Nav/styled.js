import styled from "styled-components";

export const StyledNav = styled.nav`
  background: rgb(79, 126, 229);
  display: flex;
  justify-content: space-between;
  padding: 2vmin;

  .navigation-link-container {
  }

  .nav-link {
    color: black;
  }

  .nav-link:active,
  .nav-link:visited {
    color: lightblue;
  }
`;
