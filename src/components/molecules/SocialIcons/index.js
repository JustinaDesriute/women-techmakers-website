import React from "react";
import { ReactComponent as TwitterIcon } from "../../../assets/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/svg/facebook.svg";
import { ReactComponent as MeetupIcon } from "../../../assets/svg/meetup.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/svg/linkedin.svg";
import { StyledSocialIcons } from "./styled";

const SocialIcons = props => {
  return (
    <StyledSocialIcons iconWidth={props.iconWidth} iconColor={props.iconColor}>
      <a href="https://twitter.com/WTM_Frankfurt" target="_blank">
        <TwitterIcon />
      </a>
      <a href="https://www.facebook.com/womentechmakersfrankfurt/" target="_blanket">
        <FacebookIcon />
      </a>
      <a href="https://www.meetup.com/Women-Techmakers-Frankfurt_Rhein-Main/" target="_blanket">
        <MeetupIcon />
      </a>
      <a href="https://www.linkedin.com/company/11827278/" target="_blanket">
        <LinkedinIcon />
      </a>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
