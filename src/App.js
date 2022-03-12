import { Component } from "react";
import GalleryView from "./components/GalleryView.js";
import BaseView from "./components/BaseView.js";
import GraphView from "./components/GraphView.js";

import { graph_data, type_data } from "./models/Data.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphs_array: [],
      type_desc: [],
      search_query: "",
      display_graph: "",
    };
  }

  componentDidMount() {
    this.addData(graph_data, "graphs_array");
    this.addData(type_data, "type_desc");
  }

  addData = (data, key) => {
    this.setState({ [key]: data });
  };

  filter_graph_array = (event) => {
    this.setState({ search_query: event.target.value });
  };

  update_details_page = (data) => {
    return () => {
      this.setState({ display_graph: data });
    };
  };

  render() {
    return (
      <div className="bg-dark text-white">
        <BaseView>
          {this.state.display_graph === "" ? (
            <div>
              <nav className="navbar navbar-light">
                <form className="form-inline mt-5 mx-auto  w-50 ">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by type,task,title,publisher"
                      onChange={this.filter_graph_array}
                    />
                  </div>
                </form>
              </nav>
              <GalleryView
                graphs_array={this.state.graphs_array.filter(
                  (p) =>
                    p.title
                      .toUpperCase()
                      .indexOf(this.state.search_query.toUpperCase()) !== -1 ||
                    p.type
                      .toUpperCase()
                      .indexOf(this.state.search_query.toUpperCase()) !== -1 ||
                    p.publisher
                      .toUpperCase()
                      .indexOf(this.state.search_query.toUpperCase()) !== -1 ||
                    p.task
                      .toUpperCase()
                      .indexOf(this.state.search_query.toUpperCase()) !== -1
                )}
                type_desc_array={this.state.type_desc}
                details_page={this.update_details_page}
              ></GalleryView>
            </div>
          ) : (
            <div>
              <GraphView
                card={this.state.display_graph}
                type_desc_array={this.state.type_desc}
              ></GraphView>
            </div>
          )}
        </BaseView>
      </div>
    );
  }
}

export default App;
