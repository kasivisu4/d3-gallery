class Graph {
  title;
  src;
  iframeUrl;
  type;
  constructor({ title, src, iframeUrl, type, id, publisher }) {
    this.title = title;
    this.src = src;
    this.iframeUrl = iframeUrl;
    this.type = type;
    this.id = id;
    this.publisher = publisher;
  }
}

export default Graph;
