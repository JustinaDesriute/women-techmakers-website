import styled, { css } from "styled-components";

export const baseButton = css`
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 16px;
  font-family: "Open Sans Light";
  border: 1px solid transparent;
  text-align: center;
  height: 48px;
  min-width: 250px;

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:active,
  &:focus {
    outline: 1px solid transparent;
  }

  &:active {
    transform: translate(0, 1px);
  }
`;

export const primaryButton = css`
  background-color: #629afe;
  color: #ffffff;

  &:hover {
    background-color: #028ea0;
  }
`;

export const StyledButton = styled.button`
  ${baseButton}

  &.primary {
    ${primaryButton}
  }
`;

export default StyledButton;
