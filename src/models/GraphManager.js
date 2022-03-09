import React, { Component } from "react";

import { graph_data, type_data } from "./Data.js";

export default class GraphManager extends Component {
  constructor(props) {
    super(props);
  }

  initializeGraphdata = () => {
    this.props.addData(graph_data, "graphs_array");
    this.props.addData(type_data, "type_desc");
    this.props.update_first_time();
  };

  render() {
    return <div>{this.initializeGraphdata()}</div>;
  }
}
