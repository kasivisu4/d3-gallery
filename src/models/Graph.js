class Graph {
  title;
  src;
  iframeUrl;
  type;
  constructor({ title, src, iframeUrl, type, id, publisher, task }) {
    this.title = title;
    this.src = src;
    this.iframeUrl = iframeUrl;
    this.type = type;
    this.id = id;
    this.publisher = publisher;
    this.task = task;
  }
}

export default Graph;
