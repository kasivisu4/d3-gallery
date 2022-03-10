import { Component } from "react";

class GraphView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="bg-light rounded p-1">
          <iframe
            src={this.props.card.iframeUrl + "%2Cviewof+index"}
            height="700"
            width="850"
          />
        </div>
        <div className="h-auto d-inline-block ">
          <div className="card-body">
            <h5 className="card-title text-center">{this.props.card.title}</h5>
            <p className="card-text">
              {
                this.props.type_desc_array.filter(
                  (d) =>
                    d.type.toUpperCase() === this.props.card.type.toUpperCase()
                )[0].desc
              }
            </p>
            <h7> Publisher : {this.props.card.publisher} </h7>
            <br />
            <h7> Source : {this.props.card.src} </h7>
            <hr />
            <h7> Task : {this.props.card.task} </h7>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphView;
