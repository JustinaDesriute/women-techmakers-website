import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Events.css';

class Events extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date });

  render() {

    return (
        <div className="main-content">
          <p>navigated to: EVENTS</p>
          <div className="calendar-wrapper">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        </div>
    )
  }
}

export default Events