import React, { Component } from "react";
import BarChart from "../../components/charts/BarChart";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      data: [12, 5, 6, 6, 9, 10],
      width: 700,
      height: 500,
      id: "chart"
    };
  }

  render() {
    return (
      <div className="main-content">
        <BarChart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default Team;
