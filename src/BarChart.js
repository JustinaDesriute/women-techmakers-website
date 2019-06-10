import React, { Component } from 'react';
import * as d3 from "d3";
import logo from './wmt.png';


class BarChart extends Component
{
  componentDidMount()
  {
    this.drawChart();
  }

  drawChart()
  {
    let margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 600 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    let svg = d3.select(".main-content")
      .append("svg")
      .attr('id', 'team')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background-color", "orange")
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    let alldata = {
      "nodes": [
        {
          "id": 1,
          "name": "A",
        },
        {
          "id": 2,
          "name": "B",
        },
        {
          "id": 3,
          "name": "C",
        },
        {
          "id": 4,
          "name": "D",
        },
        {
          "id": 5,
          "name": "E",
        },
        {
          "id": 6,
          "name": "F",
        },
        {
          "id": 7,
          "name": "G",
        },
        {
          "id": 8,
          "name": "H",
        },
        {
          "id": 9,
          "name": "I",
        },
        {
          "id": 10,
          "name": "J",
        }
      ],
      "links": [

        {
          "source": 1,
          "target": 2
        },
        {
          "source": 1,
          "target": 5
        },
        {
          "source": 1,
          "target": 6
        },

        {
          "source": 2,
          "target": 3
        },
        {
          "source": 2,
          "target": 7
        }
        ,

        {
          "source": 3,
          "target": 4
        },
        {
          "source": 8,
          "target": 3
        }
        ,
        {
          "source": 4,
          "target": 5
        }
        ,

        {
          "source": 4,
          "target": 9
        },
        {
          "source": 5,
          "target": 10
        }
      ]
    }

    let link = svg
      .selectAll("line")
      .data(alldata.links)
      .enter()
      .append("line")
      .style("stroke", "#aaa")

    let node = svg
      .selectAll("image")
      .data(alldata.nodes)
      .enter()

    let simulation = d3.forceSimulation(alldata.nodes)
      .force("link", d3.forceLink()
        .id(function (d) { return d.id; })
        .links(alldata.links)
      )
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("end", ticked);

    function ticked()
    {
      link
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      node
        .append("image")
        .attr("width", "50")
        .attr("height", "50")
        .attr("xlink:href", logo)
        .attr('transform', function (d) { return 'translate(' + (d.x - 30) + ',' + (d.y - 30) + ')'; })
    }

  }

  render()
  {
    return (<svg height="0" width="0"></svg>)
  }
}

export default BarChart;