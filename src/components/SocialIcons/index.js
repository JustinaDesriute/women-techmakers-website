import React from "react";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as MeetupIcon } from "../../assets/svg/meetup.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin.svg";
import { StyledSocialIcons } from "./styled";

const SocialIcons = props => {
  return (
    <StyledSocialIcons iconWidth={props.iconWidth} iconColor={props.iconColor}>
      <TwitterIcon />
      <FacebookIcon />
      <MeetupIcon />
      <LinkedinIcon />
    </StyledSocialIcons>
  );
};

export default SocialIcons;
