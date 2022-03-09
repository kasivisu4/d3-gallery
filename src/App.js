import { Component } from "react";
import GraphManager from "./models/GraphManager.js";
import GalleryView from "./components/GalleryView.js";
import BaseView from "./components/BaseView.js";
import GraphView from "./components/GraphView.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphs_array: [],
      type_desc: [],
      first_time: true,
      search_query: "",
      details_page: false,
      display_id: "",
    };
  }

  addData = (data, key) => {
    this.setState({ [key]: data });
  };

  update_first_time = () => {
    this.setState({ first_time: false });
  };

  filter_graph_array = (event) => {
    this.setState({ search_query: event.target.value });
  };

  update_details_page = (event) => {
    this.setState({ details_page: true, display_id: event.target.value });
  };

  render() {
    return (
      <div>
        <body className="bg-dark text-white" style={{}}>
          {this.state.type_desc.length === 0 ? (
            <GraphManager
              addData={this.addData}
              update_first_time={this.update_first_time}
            ></GraphManager>
          ) : (
            <div></div>
          )}

          <BaseView>
            {this.state.details_page === false ? (
              <div>
                <nav className="navbar navbar-light">
                  <form className="form-inline mt-5 mx-auto  w-50 ">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by type,task,title"
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
                        .indexOf(this.state.search_query.toUpperCase()) !==
                        -1 ||
                      p.type
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
                  card={this.state.graphs_array[this.state.display_id]}
                  type_desc_array={this.state.type_desc}
                ></GraphView>
              </div>
            )}
          </BaseView>
        </body>
      </div>
    );
  }
}

export default App;
