import React, { Component } from "react";
import BarChart from "../../components/charts/BarChart";
import Button from "../atoms/Button";

class Team extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-content grey-ffm">
        <div className="team-text-wrapper">
          <h3 className="team-headline">Who We Are</h3>
          <p className="team-description">We are group of 6 women and 1 man, who came together with a shared goal of continuing the Google Developer Group's initiative of building a diverse Tech community. Started in 2014 with just 3 founding members, the Core Team of Women Techmakers Frankfurt expanded to 7 by 2018. Using the Meetup app as our primary resource, we organize free events in the Frankfurt area for a community of over 1700 active members.</p>
          <Button type="primary">Become a Member!</Button>
        </div>
        <BarChart/>
      </div>
    );
  }
}

export default Team;
