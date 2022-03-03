import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="g-col-6">
          <div className="embed-responsive embed-responsive-16by9  hoverable">
            <iframe
              className="embed-responsive-item"
              src="https://observablehq.com/embed/@d3/animated-treemap?cells=chart%2Cviewof+index"
              height="600px"
              width="900px"
            />
          </div>
        </div>
        <div className="g-col-6">Namaste!</div>
      </div>
    );
  }
}

export default App;
