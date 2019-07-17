import React, { Component } from "react";
import SocialIcons from "../../molecules/SocialIcons";
import Disclaimer from "../../molecules/Disclaimer";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Disclaimer iconWidth="35px"></Disclaimer>
        <SocialIcons iconWidth="30px" iconColor="#629AFE" />
      </div>
    );
  }
}

export default Footer;
