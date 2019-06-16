import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: ${props => props.iconWidth};
    height: auto;
    margin: 8px;
    path {
      fill: ${props => props.iconColor};
    }
  }
`;
