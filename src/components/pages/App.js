import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../organisms/Nav";
import Footer from "../organisms/Footer";
import Events from "./Events";
import Team from "./Team";
import Mentoring from "./Mentoring";
import Podcasts from "./Podcasts";
import JobBoard from "./JobBoard";
import Blog from "./Blog";
import Home from "./Home";

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
