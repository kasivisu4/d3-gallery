import { Component } from "react";

class GraphView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container bg-light">
        <iframe
          src={this.props.card.iframeUrl + "%2Cviewof+index"}
          height="700"
          width="800"
        />
      </div>
    );
  }
}

export default GraphView;
