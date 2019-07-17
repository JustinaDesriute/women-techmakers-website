import React, { Component } from "react";
import Calendar from "react-calendar";
import Button from "../atoms/Button";

class Events extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="main-content">
        <div className="team-text-wrapper">
          <h3 className="team-headline">Upcoming Events</h3>
          <p className="team-description">We host at least one workshop-style event per quarter, as well as a monthly Stammtisch where members can network and get to know eachother. We are always looking for sponsors for these events, so please reach out to us at via iiieetup or if your company is interested! </p>
          <Button type="primary">View All Events</Button>
        </div>
          <div className="calendar-wrapper">
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div>
      </div>
    );
  }
}

export default Events;
