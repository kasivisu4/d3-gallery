import React, { Component } from "react";

export default class BaseView extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-dark bg-dark p-4">
          <h1 className="navbar-brand fs-1" style={{ color: "#F2B5B5" }}>
            Data Driven Gallery
          </h1>
          <img src="/d3.png" className="" width="60" height="60" alt="" />
        </nav>
        {this.props.children}
        <footer className="position-relative  bottom-0 bg-dark p-1 min-vw-100">
          <p className="font-weight-normal text-white">© 2022 MIT</p>
        </footer>
      </div>
    );
  }
}
