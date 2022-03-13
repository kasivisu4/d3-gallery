import React, { Component, createRef } from "react";
import { Graph } from "../models/Graph.js";
import minimongo from "minimongo";
import { Link } from "react-router-dom";

export default class AddGraph extends Component {
  constructor(props) {
    super(props);
    this.refForm = createRef();
    this.state = {
      iframe_url: "",
      data_insert_status: "",
    };
  }
  cbk = (message) => {
    this.setState({ data_insert_status: message });
    console.log(this.state);
  };

  storeDataIntoIndexedDB(data, cbk) {
    let IndexedDb = minimongo.IndexedDb;

    let db = new IndexedDb(
      { namespace: "d3-gallery" },
      function () {
        db.addCollection("graph", function () {
          db.graph.find({ iframe_url: data.iframe_url }).fetch(
            function () {
              db.graph.upsert(data, function () {
                cbk("Inserted");
                console.log("inserted");
              });
            },
            function (res) {
              cbk("Duplicate");
              console.log("duplicate", res);
            }
          );
        });
      },
      function () {
        cbk("Error");
      }
    );
  }

  data_status = () => {
    switch (this.state.data_insert_status) {
      case "Success":
        return (
          <div className="alert alert-success" role="alert">
            Data was inserted successfully!! Hurrah!
          </div>
        );

      case "Error":
        return <div> * Error!! Please check all the data</div>;

      case "Duplicate":
        return <div> Duplicate Data</div>;

      default:
        return <div> # Please Fill all the fields</div>;
    }
  };

  addGraph = (event) => {
    event.preventDefault();
    const fd = new FormData(this.refForm.current);
    let newGraph;
    let title = fd.get("title"),
      src = fd.get("src"),
      graph_type = fd.get("graph_type"),
      publisher = fd.get("publisher"),
      task = fd.get("task"),
      iframe_url = this.state.iframe_url;
    try {
      newGraph = new Graph({
        title,
        src,
        iframe_url,
        graph_type,
        publisher,
        task,
      });
    } catch (e) {
      this.setState({ data_insert_status: "Error" });
    }
    this.storeDataIntoIndexedDB(newGraph, this.cbk);
    console.log(this.state);
  };

  AddForm() {
    return (
      <form ref={this.refForm}>
        <div className="mb-3 p-3">
          <label className="form-label">Graph Title</label>
          <input type="text" className="form-control mb-3" name="title" />
          <label className="form-label">Source</label>
          <input type="text" className="form-control mb-3" name="src" />
          <label className="form-label">Graph Type</label>
          <input type="text" className="form-control mb-3" name="graph_type" />
          <label className="form-label">Publisher</label>
          <input type="text" className="form-control mb-3" name="publisher" />
          <label className="form-label">Task</label>
          <input type="text" className="form-control mb-3" name="task" />
          <button className="btn btn-info m-3 p-2" onClick={this.addGraph}>
            {" "}
            Add
          </button>
          {this.data_status()}
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="bg-dark text-white vw-75 vh-100">
        <button type="button" className="btn btn-dark">
          <Link to="/d3-gallery" className="link-light">
            &#8592; Home
          </Link>
        </button>
        <h4 className="text-center p-3">
          Please fill the details to add your graph
        </h4>
        <div className="row">
          <div className="col-3">{this.AddForm()}</div>
          <div className="col-9">
            <div className="input-group mb-3">
              <input
                type="url"
                className="form-control"
                placeholder="please paste your iframe url here"
                name="iframe_url"
                onChange={(event) =>
                  this.setState({ iframe_url: event.target.value })
                }
              />
            </div>
            <div className="bg-light h-100 rounded">
              <iframe
                src={this.state.iframe_url}
                height="100%"
                width="100%"
                title={this.state.iframe_url}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
