import { Component } from "react";
import GraphManager from "./models/GraphManager.js";
import GalleryView from "./components/GalleryView.js";
import BaseView from "./components/BaseView.js";
import Carousel from "react-bootstrap/Carousel";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphs_array: [],
      first_time: true,
    };
  }

  addData = (data) => {
    this.setState({ graphs_array: [...this.state.graphs_array, ...data] });
  };

  update_first_time = () => {
    this.setState({ first_time: false });
  };

  render() {
    return (
      <div>
        <body className="bg-dark text-white">
          {this.state.first_time === true ? (
            <GraphManager
              addData={this.addData}
              update_first_time={this.update_first_time}
            ></GraphManager>
          ) : (
            <div></div>
          )}

          <BaseView>
            <GalleryView graphs_array={this.state.graphs_array}></GalleryView>
          </BaseView>
        </body>
      </div>
    );
  }
}

export default App;
