import React, { Component } from "react";

export default class BaseView extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-dark bg-dark p-4">
          <a className="navbar-brand fs-1">Data Driven Gallery</a>
          <img src="/d3.png" className="" width="60" height="60" alt="" />
        </nav>
        {this.props.children}
        <footer className="position-fixed bottom-0 bg-dark p-2 min-vw-100">
          <p className="font-weight-normal text-white">© 2022 MIT</p>
        </footer>
      </div>
    );
  }
}
