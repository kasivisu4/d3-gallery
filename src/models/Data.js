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
    task: "State wise Population from 1790  based on US Census Bureau data",
    id: 0,
  }),
  new Graph({
    title: "Zoomable Sunburst",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/zoomable-sunburst?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    task: "All libraries of Flare in hierarchial order",
    id: 1,
  }),
  new Graph({
    title: "Bar Chart Race",
    src: "observablehq",
    iframeUrl: "https://observablehq.com/embed/@d3/bar-chart-race?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    task: "Top global brands from 2000 to 2019",
    id: 2,
  }),
  new Graph({
    title: "Bar Chart Transitions",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/bar-chart-transitions?cells=chart",
    type: "Animation",
    publisher: "Mike Bostock",
    task: "Frequency graph based transistion",
    id: 3,
  }),
  new Graph({
    title: "World Airports Voronoi",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@d3/world-airports-voronoi?cells=chart",
    type: "Maps",
    publisher: "Mike Bostock",
    task: "Projection of Airports based on Long,Lat Co-ordinates",
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
    task: "Based on Lloyd’s algorithm, displays the image in terms of points",
  }),
  new Graph({
    title: "UMAP playground",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@john-guerra/umap-playground?cells=chart",
    type: "Interaction",
    publisher: "John Guerra",
    id: 6,
    task: "A notebook to play with the UMAP-JS the dimensionality reduction algorithm and visualization with your own data",
  }),
  new Graph({
    title: "Programmatically control a D3 brush",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@john-clarke/programmatically-control-a-d3-brush?cells=chart",
    type: "Animation",
    publisher: "John Clarke",
    id: 7,
    task: "Controlling the data using d3 brush",
  }),
  new Graph({
    title: "Navio",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@john-guerra/navio?cells=viewof+selected",
    type: "Interaction",
    publisher: "John Guerra",
    id: 8,
    task: "Navio is a data exploration widget that you can easily include on your code, and that you can even use on an observable to explore some data",
  }),
  new Graph({
    title: "Solar Path",
    src: "observablehq",
    iframeUrl:
      "https://observablehq.com/embed/@mbostock/solar-path?cells=chart",
    type: "Maps",
    publisher: "Mike Bostock",
    id: 9,
    task: "Sun’s path throughout the year for the given location",
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
    desc: "Why not have a little fun? Life’s not just about work, you know. ",
  }),
];
export { graph_data, type_data };
