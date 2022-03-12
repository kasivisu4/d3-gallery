export class Graph {
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

export class GraphType {
  type;
  desc;
  constructor({ type, desc }) {
    this.type = type;
    this.desc = desc;
  }
}
