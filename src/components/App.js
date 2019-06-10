import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Events from "../pages/Events";
import Team from "../pages/Team";
import Mentoring from "../pages/Mentoring";
import Podcasts from "../pages/Podcasts";
import JobBoard from "../pages/JobBoard";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content-wrapper">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/mentoring" component={Mentoring} />
          <Route exact path="/jobboard" component={JobBoard} />
          <Route exact path="/blog" component={Blog} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
