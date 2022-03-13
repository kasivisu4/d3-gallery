import { Component } from "react";
import GalleryView from "./components/GalleryView.js";
import BaseView from "./components/BaseView.js";
import GraphView from "./components/GraphView.js";
import minimongo from "minimongo";
import { Link } from "react-router-dom";

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
    this.getDataFromIndexedDB(this.addDataFromIndex);
  }

  getDataFromIndexedDB = (add_data_from_index) => {
    let IndexedDb = minimongo.IndexedDb;
    let db = new IndexedDb(
      { namespace: "d3-gallery" },
      function () {
        db.addCollection("graph", function () {
          db.graph.find({}).fetch(function (res, err) {
            add_data_from_index(res);
          });
        });
      },
      function () {
        alert("some error!");
      }
    );
  };

  addData = (data, key) => {
    this.setState({ [key]: data });
  };

  addDataFromIndex = (x) => {
    return this.setState({
      graphs_array: [...this.state.graphs_array, ...x],
    });
  };

  filterGraphArray = (event) => {
    this.setState({ search_query: event.target.value });
  };

  updateDetailsPage = (data) => {
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
                <form className="form-inline mt-1 mx-auto  w-50 ">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by :  type | task | title | publisher"
                      onChange={this.filterGraphArray}
                    />
                  </div>
                </form>
                <button type="button" className="btn btn-warning">
                  <Link to="/d3-gallery/add_graph" className="link-dark">
                    Add Your Graph (+)
                  </Link>
                </button>
              </nav>
              <GalleryView
                graphs_array={this.state.graphs_array.filter(
                  (p) =>
                    p.title
                      .toUpperCase()
                      .indexOf(this.state.search_query.toUpperCase()) !== -1 ||
                    p.graph_type
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
                details_page={this.updateDetailsPage}
              ></GalleryView>
            </div>
          ) : (
            <div>
              <GraphView
                card={this.state.display_graph}
                type_desc_array={this.state.type_desc}
                update_details_page={this.updateDetailsPage}
              ></GraphView>
            </div>
          )}
        </BaseView>
      </div>
    );
  }
}

export default App;
