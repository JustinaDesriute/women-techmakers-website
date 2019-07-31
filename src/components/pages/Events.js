import React, { Component } from "react";
// import Calendar from "react-calendar";
import Button from "../atoms/Button";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Events extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  showAllEvents = () => {
    console.log('testing show all events!', Route.path)
  }

  render() {
    return (
      <div className="main-content">
        <div className="text-wrapper">
          <h3 className="headline">Upcoming Events</h3>
          <p className="description">We host at least one workshop-style event per quarter, as well as a monthly Stammtisch where members can network and get to know eachother. We are always looking for sponsors for these events, so please reach out to us at via meetup or if your company is interested! </p>
          {/* <Router>
            <Button type="primary" onClick={this.showAllEvents}>View All Events
            </Button>
          </Router> */}
          <Route render={({ history }) => (
            <Button type="primary" onClick={() => { history.push('/events') }}>Click Me!</Button>
          )} />

        </div>
          {/* <div className="calendar-wrapper">
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div> */}
      </div>
    );
  }
}

export default Events;
