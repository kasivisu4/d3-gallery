import { Component } from "react";
import GraphView from "./GraphView";

class GalleryView extends Component {
  constructor(props) {
    super(props);
    this.display.bind(this);
  }

  display() {
    console.log("arr");
    console.log(this.props.graphs_array);
    let types = [...new Set(this.props.graphs_array.map((d) => d.type))];
    console.log(types);
    return (
      <div className="display">
        {types.map((t) => {
          return (
            <div>
              <p>{t}</p>
              <p>
                {this.props.graphs_array.filter((d) => d.type === t)[0].src}
              </p>
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
