import { Component } from "react";
import CardView from "./CardView";
import PropTypes from "prop-types";

/**
 * Class for displaying all the cards in the Gallery
 */
class GalleryView extends Component {
  constructor(props) {
    super(props);
    this.display.bind(this);
  }

  /**
   * Function to get the description of the Graph type
   * @param {*} graph_type
   * @returns description component
   */
  getDescription = (graph_type) => {
    let desc = this.props.type_desc_array.filter(
      (d) => d.graph_type === graph_type.toUpperCase()
    );
    return (
      <div>
        {" "}
        <h5 className="mb-2" style={{ color: "#F2B5A0" }}>
          {graph_type} {desc.length !== 0 ? "- " + desc[0]["desc"] : ""}
        </h5>
        <br />
      </div>
    );
  };

  /**
   * Function to rended the Graphs
   */
  display() {
    let types = [...new Set(this.props.graphs_array.map((d) => d.graph_type))];
    return (
      <div className="display">
        {types.map((t, index) => {
          return (
            <div className="mt-1" key={index}>
              <hr />
              {this.getDescription(t)}
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

GalleryView.propTypes = {
  graphs_array: PropTypes.arrayOf(PropTypes.object).isRequired,
  type_desc_array: PropTypes.arrayOf(PropTypes.object).isRequired,
  details_page: PropTypes.func.isRequired,
};

export default GalleryView;
