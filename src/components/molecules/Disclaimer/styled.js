import styled from "styled-components";

export const StyledDisclaimer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: ${props => props.iconWidth};
    height: auto;
    margin: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  .copyright-text {
    font-size: 10px;
  }
`;
