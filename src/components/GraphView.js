import { Component } from "react";

class GraphView extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-dark btn-lg"
          onClick={this.props.update_details_page("")}
        >
          &#8592; Home
        </button>
        <div className="d-flex justify-content-between">
          <div className="bg-light rounded p-1">
            <iframe
              title={this.props.card.title}
              src={this.props.card.iframe_url + "%2Cviewof+index"}
              height="700"
              width="850"
            />
          </div>
          <div className="h-auto d-inline-block ">
            <div className="card-body">
              <h5 className="card-title text-center">
                {this.props.card.title}
              </h5>
              <p className="card-text">
                {
                  this.props.type_desc_array.filter(
                    (d) => d.graph_type === this.props.card.graph_type
                  )[0].desc
                }
              </p>
              <h6> Publisher : {this.props.card.publisher} </h6>
              <br />
              <h6> Source : {this.props.card.src} </h6>
              <hr />
              <h6> Task : {this.props.card.task} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphView;
