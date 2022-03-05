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
          "https://observablehq.com/embed/@d3/animated-treemap?cells=chart%2Cviewof+index",
        type: "Animation",
      }),
      new Graph({
        title: "Animated TreeMap",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/animated-treemap?cells=chart%2Cviewof+index",
        type: "graph",
      }),
      new Graph({
        title: "Animated TreeMap",
        src: "observablehq",
        iframeUrl:
          "https://observablehq.com/embed/@d3/animated-treemap?cells=chart%2Cviewof+index",
        type: "chart",
      }),
    ]);

    this.props.update_first_time();
  };

  render() {
    return <div>{this.initializeGraphdata()}</div>;
  }
}
