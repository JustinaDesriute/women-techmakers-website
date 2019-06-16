import React from "react";
import { StyledHomeHero } from "./styled";
import Button from "../../../atoms/Button";
import { ReactComponent as WTMLogo } from "../../../../assets/svg/wtm-color.svg";

const HomeHero = () => {
  return (
    <StyledHomeHero>
      <div className="content-wrapper">
        <h1 className="headline">Never Network Alone</h1>
        <h2 className="subheadline">Women Techmakers Frankfurt & Rhine-Main</h2>
        <WTMLogo className="wtm-logo" />
        <Button type="primary">Join the Community!</Button>
      </div>
    </StyledHomeHero>
  );
};

export default HomeHero;
