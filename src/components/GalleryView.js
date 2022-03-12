import { Component } from "react";
import CardView from "./CardView";
class GalleryView extends Component {
  constructor(props) {
    super(props);
    this.display.bind(this);
  }

  get_desc = (t) => {
    let desc = this.props.type_desc_array.filter(
      (d) => d.graph_type === t.toUpperCase()
    );
    return (
      <div>
        {" "}
        <h5 className="mb-2" style={{ color: "#F2B5A0" }}>
          {t} {desc.length !== 0 ? "- " + desc[0]["desc"] : ""}
        </h5>
        <br />
      </div>
    );
  };

  display() {
    let types = [...new Set(this.props.graphs_array.map((d) => d.graph_type))];
    return (
      <div className="display">
        {types.map((t, index) => {
          return (
            <div className="mt-1" key={index}>
              <hr />
              {this.get_desc(t)}
              <CardView
                cards={this.props.graphs_array.filter(
                  (d) => d.graph_type === t
                )}
                details_page={this.props.details_page}
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
