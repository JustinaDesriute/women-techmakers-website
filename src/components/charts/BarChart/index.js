import React, { Component } from 'react';
import * as d3 from "d3";
import logo from '../../../assets/wtm.png';
import an from '../../../assets/an.png';
import ann from '../../../assets/ann.png';
import jd from '../../../assets/jd.png';
import mi from '../../../assets/mi.png';
import mo from '../../../assets/mo.png';
import na from '../../../assets/na.png';
import te from '../../../assets/te.png';

class BarChart extends Component
{
  componentDidMount()
  {
    this.drawChart();
  }

  drawChart()
  {

    let width = window.innerWidth * 0.7;

    let height = window.innerHeight * 0.8;

    let margin = { top: 10, right: 30, bottom: 30, left: 40 },
      fullwidth = width - margin.left - margin.right,
      fullheight = height - margin.top - margin.bottom;

    let svg = d3.select(".main-content")
      .append("svg")
      .attr('id', 'team')
      .attr("width", fullwidth + margin.left + margin.right)
      .attr("height", fullheight + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    let alldata = {
      "nodes": [
        {
          "id": 1,
          "name": "Anastasia",
          "title": "Marketing Communications",
          "img": an,
        },
        {
          "id": 2,
          "name": "Anna",
          "title": "Integration Engineer",
          "img": ann,
        },
        {
          "id": 3,
          "name": "Justina",
          "title": "Frontend Software Engineer",
          "img": jd,
        },
        {
          "id": 4,
          "name": "Michael",
          "title": "Coach, Lecturer",
          "img": mi,
        },
        {
          "id": 5,
          "name": "Mona",
          "title": "Marketing Executive",
          "img": mo,
        },
        {
          "id": 6,
          "name": "Natalie",
          "title": "Frontend Web Developer",
          "img": na,          
        },
        {
          "id": 7,
          "name": "Theresa",
          "title": "PM for Digitization",
          "img": te,
        },
      ],
      "links": [
        {
          "source": 7,
          "target": 1
        },
        {
          "source": 6,
          "target": 3
        },
        {
          "source": 5,
          "target": 2
        },

        {
          "source": 7,
          "target": 4
        },
        {
          "source": 5,
          "target": 7
        }
        ,
        {
          "source": 7,
          "target": 4
        },
        {
          "source": 7,
          "target": 6
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
      .force("charge", d3.forceManyBody().strength(-2400))
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
        .append("text")
        .attr("class", "nodetext")
        .attr("x", d => d.x + 30)
        .attr("y", d => d.y)
        .attr("fill", 'black')
        .text(function (d) { return d.name; });
      node
        .append("image")
        .attr("width", "60")
        .attr("height", "60")
        .attr("xlink:href", function (d) { return d.img; })
        .attr('transform', function (d) { return 'translate(' + (d.x - 30) + ',' + (d.y - 30) + ')'; })
        .on("click", function (d) { console.log('image clicked!', d.title) });
    }

  }

  render()
  {
    return (<svg height="0" width="0"></svg>)
  }
}

export default BarChart;