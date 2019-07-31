import React from "react";
import StyledButton from "./styled";

const Button = ({ onClick, children, type }) => {
  return <StyledButton onClick={onClick} className={type}>{children}</StyledButton>;
};

export default Button;
