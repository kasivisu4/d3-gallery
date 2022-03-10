import Graph from "./Graph.js";
import GraphType from "./GraphType.js";

let graph_data = [
  new Graph({
    title: "Animated TreeMap",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/animated-treemap?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    id: 0,
  }),
  new Graph({
    title: "Zoomable Sunburst",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/zoomable-sunburst?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    id: 1,
  }),
  new Graph({
    title: "Bar Chart Race",
    src: "observablehq",
    iframeUrl: "https://observablehq.com/embed/@d3/bar-chart-race?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    id: 2,
  }),
  new Graph({
    title: "Bar Chart Transitions",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/bar-chart-transitions?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    id: 3,
  }),
  new Graph({
    title: "World Airports Voronoi",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/world-airports-voronoi?cells=chart",
    type: "Maps",
    publisher: "Mike Bostock",
    id: 4,
  }),
  new Graph({
    title: "Voronoi Stippling",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@mbostock/voronoi-stippling?cells=image",
    type: "Just for fun",
    publisher: "Mike Bostock",
    id: 5,
  }),
];

let type_data = [
  new GraphType({
    type: "Interaction",
    desc: "D3’s low-level approach allows for performant incremental updates during interaction. And D3 supports popular interaction methods including dragging, brushing, and zooming.",
  }),
  new GraphType({
    type: "Animation",
    desc: "D3’s data join, interpolators, and easings enable flexible animated transitions between views while preserving object constancy.",
  }),
  new GraphType({
    type: "Maps",
    desc: "D3 implements a dizzying array of geographic projections. It works great with GeoJSON, TopoJSON, and even shapefiles.",
  }),
  new GraphType({
    type: "Just for fun",
    desc: "Why not have a little fun? Life’s not just about work, you know.",
  }),
];
export { graph_data, type_data };
