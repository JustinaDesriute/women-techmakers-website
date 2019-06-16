import React, { Component } from "react";
import logo from "../assets/wmt.png";

class Mentoring extends Component {
  render() {
    return (
      <div className="main-content">
        <p>navigated to: MENTORING</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to WomenTechMakers Frankfurt!</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/company/women-techmakers-frankfurt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet us!
        </a>
      </div>
    );
  }
}

export default Mentoring;
