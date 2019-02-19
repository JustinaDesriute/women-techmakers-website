import React, { Component } from 'react';
import logo from '../wmt.png';

class Team extends Component {

    render() {
        return (
          <div className="main-content">
            <div>
              <p>navigated to TEAM</p>
            </div>
            <section>
              <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Welcome to WomenTechMakers Frankfurt!
                </p>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/company/women-techmakers-frankfurt/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Meet us!
                </a>
            </section>
          </div>
        )
      }
    }

export default Team