import React, { Component } from 'react';
import HeaderNavigationBar from './HeaderNavigationBar';
import SocialMediaFooter from './SocialMediaFooter';
import './App.css';
import './HeaderNavigationBar.css';
import './SocialMediaFooter.css';

class App extends Component {

  render() {

    return (
      <div className="content-wrapper">
          <HeaderNavigationBar></HeaderNavigationBar>
          <SocialMediaFooter></SocialMediaFooter>
      </div>
    );
  }
}

export default App;
