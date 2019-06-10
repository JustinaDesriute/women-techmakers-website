import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled";

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

class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <NavLink to="/" exact className="nav-link">
          Home Icon
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
      </StyledNav>
    );
  }
}

export default Nav;
