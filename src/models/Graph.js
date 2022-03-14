/**
 * Class for Creating the Graph Component
 */
export class Graph {
  title;
  src;
  iframe_url;
  graph_type;
  error_message = "";

  /**
   * constructor
   * @param {string} title The title of the graph
   * @param {string} src The source of the graph
   * @param {url} iframe_url For displaying the iframe on the
   * @param {string} graph_type The type of the graph
   * @param {string} publisher The publisher of the graph
   * @param {string} task For displaying the task of the graph
   */
  constructor({ title, src, iframe_url, graph_type, publisher, task }) {
    this.validateData(title, src, iframe_url, graph_type, publisher, task);
    this.title = title;
    this.src = src;
    this.iframe_url = iframe_url;
    this.graph_type = graph_type.toUpperCase();
    this.publisher = publisher;
    this.task = task;
  }

  /**
   * Function to validateData
   * @param {string} title The title of the graph
   * @param {string} src The source of the graph
   * @param {url} iframe_url For displaying the iframe on the
   * @param {string} graph_type The type of the graph
   * @param {string} publisher The publisher of the graph
   * @param {string} task For displaying the task of the graph
   */
  validateData(title, src, iframe_url, graph_type, publisher, task) {
    if (!title) {
      this.error_message += " title must be specified; ";
    }

    if (!src) {
      this.error_message += " src must be specified; ";
    }

    if (!iframe_url) {
      this.error_message += " iframe_url must be specified; ";
    }

    if (!graph_type) {
      this.error_message += " graph_type must be specified; ";
    }

    if (!publisher) {
      this.error_message += " publisher must be specified; ";
    }

    if (!task) {
      this.error_message += " task must be specified";
    }

    if (this.error_message !== "") {
      throw new Error(this.error_message);
    }
  }
}

/**
 * Class for Creating the Graph type Desc Component
 */
export class GraphType {
  graph_type;
  desc;

  /**
   *
   * @param {string} graph_type The type of the graph
   * @param {string} desc The description of the graph
   */
  constructor({ graph_type, desc }) {
    this.graph_type = graph_type.toUpperCase();
    this.desc = desc;
  }
}
