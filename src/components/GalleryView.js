import { Component } from "react";
import GraphView from "./GraphView";
import CardView from "./CardView";
class GalleryView extends Component {
  constructor(props) {
    super(props);
    this.display.bind(this);
  }

  display() {
    let types = [...new Set(this.props.graphs_array.map((d) => d.type))];
    return (
      <div className="display">
        {types.map((t) => {
          return (
            <div className="mt-5">
              <hr />
              <p className="bg-dark text-white">{t}</p>

              <CardView
                cards={this.props.graphs_array.filter((d) => d.type === t)}
              />
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return <div>{this.display()}</div>;
  }
}

export default GalleryView;
