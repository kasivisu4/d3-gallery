class Graph {
  title;
  src;
  iframeUrl;
  type;
  constructor({ title, src, iframeUrl, type }) {
    this.title = title;
    this.src = src;
    this.iframeUrl = iframeUrl;
    this.type = type;
  }
}

export default Graph;
