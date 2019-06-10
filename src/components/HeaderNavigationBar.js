import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Events from "../pages/Events";
import Team from "../pages/Team";
import Mentoring from "../pages/Mentoring";
import Podcasts from "../pages/Podcasts";
import JobBoard from "../pages/JobBoard";
import Blog from "../pages/Blog";

class HeaderNavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="navigation-link-container">
            <Link to="/team" className="nav-link">
              Team
            </Link>
          </div>
          <div className="navigation-link-container">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </div>
          <div className="navigation-link-container">
            <Link to="/podcasts" className="nav-link">
              Podcasts
            </Link>
          </div>
          <div className="navigation-link-container">
            <Link to="/mentoring" className="nav-link">
              Mentoring
            </Link>
          </div>
          <div className="navigation-link-container">
            <Link to="/jobboard" className="nav-link">
              Job Board
            </Link>
          </div>
          <div className="navigation-link-container">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </div>
        </div>
        <Route exact path="/" render={() => <Team />} />
        <Route exact path="/team" render={() => <Team />} />
        <Route exact path="/events" render={() => <Events />} />
        <Route exact path="/podcasts" render={() => <Podcasts />} />
        <Route exact path="/mentoring" render={() => <Mentoring />} />
        <Route exact path="/jobboard" render={() => <JobBoard />} />
        <Route exact path="/blog" render={() => <Blog />} />
      </div>
    );
  }
}

export default HeaderNavigationBar;
