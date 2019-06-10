import React, { Component } from 'react';
import HeaderNavigationBar from './HeaderNavigationBar';
import SocialMediaFooter from './SocialMediaFooter';
import './App.css';
import './HeaderNavigationBar.css';
import './SocialMediaFooter.css';

import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <HeaderNavigationBar></HeaderNavigationBar> */}
        <Navbar />
        <Section
          title="Team"
          subtitle={dummyText}
          content={'here goes the content'}
          dark={true}
          id="section1"
        />
        <Section
          title="About Us"
          subtitle={dummyText}
          content={'here goes the content'}
          dark={false}
          id="section2"
        />
        <Section
          title="Events"
          subtitle={dummyText}
          content={'here goes the content'}
          dark={true}
          id="section3"
        />
        <Section
          title="Job Board"
          subtitle={dummyText}
          content={'here goes the content'}
          dark={false}
          id="section4"
        />
        <Section
          title="Blog"
          subtitle={dummyText}
          content={'here goes the content'}
          dark={true}
          id="section5"
        />

        <SocialMediaFooter></SocialMediaFooter>
      </div>
    );
  }
}

export default App;
