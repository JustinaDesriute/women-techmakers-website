import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3
      .select(".main-content")
      .append("svg")
      .attr("id", "team")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("y", -50);

    svg
      .selectAll("#team")
      .data(data)
      .enter()
      .append("image")
      .attr(
        "xlink:href",
        "https://firebasestorage.googleapis.com/v0/b/women-techmakers-website.appspot.com/o/Screenshot%202019-03-11%20at%2010.10.43.png?alt=media&token=d05d64b6-0403-499a-a8c9-e7b4e6165f4d"
      )
      .attr("height", "100%")
      .attr("width", "100%");
  }

  render() {
    return <svg height="0" width="0" />;
  }
}

export default BarChart;
