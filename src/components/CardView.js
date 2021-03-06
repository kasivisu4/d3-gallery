import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Class for displaying Card component
 */
export default class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  /**
   * Render the next card when the user clicks on right button
   */
  moveRight = () => {
    if (this.state.index < this.props.cards.length - 3) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  /**
   * Render the next card when the user clicks on left button
   */
  moveLeft = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.moveLeft}
          >
            {"<"}
          </button>
          {this.props.cards
            .slice(this.state.index, this.state.index + 3)
            .map((card, index) => (
              <div className="card" key={index}>
                <div>
                  <iframe
                    title={card.title}
                    src={card.iframe_url}
                    height="300"
                    width="300"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={this.props.details_page(card)}
                >
                  Details
                </button>
              </div>
            ))}
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.moveRight}
          >
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

CardView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  details_page: PropTypes.func.isRequired,
};
