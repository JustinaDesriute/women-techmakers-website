import React from "react";
import StyledButton from "./styled";

const Button = ({ children, type }) => {
  return <StyledButton className={type}>{children}</StyledButton>;
};

export default Button;
