import React, { Component } from "react";

export default class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  moveRight = () => {
    if (this.state.index < this.props.cards.length - 3) {
      this.setState({ index: this.state.index + 1 });
    }
    console.log(this.props.cards.length);
  };

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
            .map((card) => (
              <div className="card">
                <div>
                  <iframe src={card.iframeUrl} height="300" width="300" />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  value={card.id}
                  onClick={this.props.details_page}
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
