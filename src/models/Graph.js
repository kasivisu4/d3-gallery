class Graph {
  title;
  src;
  iframeUrl;
  type;
  constructor({ title, src, iframeUrl, type, id }) {
    this.title = title;
    this.src = src;
    this.iframeUrl = iframeUrl;
    this.type = type;
    this.id = id;
  }
}

export default Graph;
