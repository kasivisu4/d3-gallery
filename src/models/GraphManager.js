import React, { Component } from "react";
import Graph from "./Graph.js";
import GraphType from "./GraphType.js";

export default class GraphManager extends Component {
  constructor(props) {
    super(props);
  }

  initializeGraphdata = () => {
    this.props.addData(
      [
        new Graph({
          title: "Animated TreeMap",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/animated-treemap?cells=chart",
          type: "Animation",
          id: 0,
        }),
        new Graph({
          title: "Animated TreeMap",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/animated-treemap?cells=chart",
          type: "Animation",
          id: 1,
        }),
        new Graph({
          title: "Zoomable Sunburst",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/zoomable-sunburst?cells=chart",
          type: "Animation",
          id: 2,
        }),
        new Graph({
          title: "Bar Chart Race",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/bar-chart-race?cells=chart",
          type: "Animation",
          id: 3,
        }),
        new Graph({
          title: "Bar Chart Transitions",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/bar-chart-transitions?cells=chart",
          type: "Animation",
          id: 4,
        }),
        new Graph({
          title: "World Airports Voronoi",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@d3/world-airports-voronoi?cells=chart",
          type: "Maps",
          id: 5,
        }),
        new Graph({
          title: "Voronoi Stippling",
          src: "observablehq",
          iframeUrl:
            "https://observablehq.com/embed/@mbostock/voronoi-stippling?cells=image",
          type: "Just for fun",
          id: 6,
        }),
      ],
      "graphs_array"
    );

    this.props.addData(
      [
        new GraphType({
          type: "Interaction",
          desc: "D3’s low-level approach allows for performant incremental updates during interaction. And D3 supports popular interaction methods including dragging, brushing, and zooming.",
        }),
        new GraphType({
          type: "Animation",
          desc: "D3’s data join, interpolators, and easings enable flexible animated transitions between views while preserving object constancy.",
        }),
      ],
      "type_desc"
    );

    this.props.update_first_time();
  };

  render() {
    return <div>{this.initializeGraphdata()}</div>;
  }
}
