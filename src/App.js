import React, { Component } from "react";
import HeaderNavigationBar from "./components/HeaderNavigationBar";
import SocialMediaFooter from "./components/SocialMediaFooter";
import "./HeaderNavigationBar.css";
import "./SocialMediaFooter.css";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <HeaderNavigationBar />
        <SocialMediaFooter />
      </div>
    );
  }
}

export default App;
