import React from "react";
import { StyledHomeHero } from "./styled";
import Button from "../../../atoms/Button";
import { ReactComponent as WTMLogo } from "../../../../assets/svg/wtm-color.svg";
import Team from "../../../pages/Team";
import Activities from "../../../pages/Activities";
import Events from "../../../pages/Events";
import Vision from "../../../pages/Vision";
import Partnerships from "../../../pages/Partnerships";

const HomeHero = () => {
  return (
    <div>
      <StyledHomeHero>
        <div className="home-section">
          <h1 className="headline">Never Network Alone</h1>
          <h2 className="subheadline">Women Techmakers Frankfurt & Rhine-Main</h2>
          <WTMLogo className="wtm-logo" />
          <Button type="primary">Join the Community!</Button>
        </div>
        <div className="who-we-are">
          <Team></Team>
        </div>
        <div className="what-we-do">
          <Activities></Activities>
        </div>
        <div className="events">
          <Events></Events>
        </div>
        <div className="vision-mission">
          <Vision></Vision>
        </div>
        <div className="partners">
          <Partnerships></Partnerships>
        </div>
      </StyledHomeHero>
    </div>
  );
};

export default HomeHero;
