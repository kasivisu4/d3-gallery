export class Graph {
  title;
  src;
  iframe_url;
  graph_type;
  Error_message = "";
  constructor({ title, src, iframe_url, graph_type, publisher, task }) {
    this.validateData(title, src, iframe_url, graph_type, publisher, task);
    this.title = title;
    this.src = src;
    this.iframe_url = iframe_url;
    this.graph_type = graph_type.toUpperCase();
    this.publisher = publisher;
    this.task = task;
  }

  validateData(title, src, iframe_url, graph_type, publisher, task) {
    if (!title) {
      this.Error_message += " title must be specified; ";
    }

    if (!src) {
      this.Error_message += " src must be specified; ";
    }

    if (!iframe_url) {
      this.Error_message += " iframe_url must be specified; ";
    }

    if (!graph_type) {
      this.Error_message += " graph_type must be specified; ";
    }

    if (!publisher) {
      this.Error_message += " publisher must be specified; ";
    }

    if (!task) {
      this.Error_message += " task must be specified";
    }

    if (this.Error_message !== "") {
      throw new Error(this.Error_message);
    }
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
