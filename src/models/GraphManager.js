import React, { Component } from "react";
import Graph from "./Graph.js";

export default class GraphManager extends Component {
  constructor(props) {
    super(props);
  }

  initializeGraphdata = () => {
    this.props.addData([
      new Graph({
        title: "Animated TreeMap",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/animated-treemap?cells=chart",
        type: "Animation",
      }),
      new Graph({
        title: "Animated TreeMap",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/animated-treemap?cells=chart",
        type: "Animation",
      }),
      new Graph({
        title: "Zoomable Sunburst",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/zoomable-sunburst?cells=chart",
        type: "Animation",
      }),
      new Graph({
        title: "Bar Chart Race",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/bar-chart-race?cells=chart",
        type: "Animation",
      }),
      new Graph({
        title: "Bar Chart Transitions",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/bar-chart-transitions?cells=chart",
        type: "Animation",
      }),
      new Graph({
        title: "World Airports Voronoi",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/world-airports-voronoi?cells=chart",
        type: "Maps",
      }),
      new Graph({
        title: "Voronoi Stippling",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@mbostock/voronoi-stippling?cells=image",
        type: "Just for fun",
      }),
    ]);

    this.props.update_first_time();
  };

  render() {
    return <div>{this.initializeGraphdata()}</div>;
  }
}
