export class Graph {
  title;
  src;
  iframeUrl;
  graph_type;
  constructor({ title, src, iframeUrl, graph_type, publisher, task }) {
    this.title = title;
    this.src = src;
    this.iframeUrl = iframeUrl;
    this.graph_type = graph_type.toUpperCase();
    this.publisher = publisher;
    this.task = task;
  }
}

export class GraphType {
  graph_type;
  desc;
  constructor({ graph_type, desc }) {
    this.graph_type = graph_type.toUpperCase();
    this.desc = desc;
  }
}
