import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled";
import SocialIcons from "../SocialIcons";
import { ReactComponent as HomeIcon } from "../../assets/svg/wtm-solid.svg";

const homepageSections = [
  {
    destination: "/#who-we-are",
    title: "Who We Are"
  },
  {
    destination: "/#what-we-do",
    title: "What We Do"
  },
  {
    destination: "/#events",
    title: "Events"
  },
  {
    destination: "/#vision-mission",
    title: "Vision & Mission"
  },
  {
    destination: "/#partners",
    title: "Partners"
  }
];

const Nav = () => {
  return (
    <StyledNav>
      <NavLink to="/" exact className="home-link">
        <HomeIcon />
      </NavLink>
      <div className="navigation-link-container">
        {homepageSections.map(section => (
          <NavLink
            to={section.destination}
            className="nav-link"
            key={section.title}
          >
            {section.title}
          </NavLink>
        ))}
      </div>
      <div className="social-wrapper">
        <SocialIcons iconWidth="40px" iconColor="#FFFFFF" />
      </div>
    </StyledNav>
  );
};

export default Nav;
