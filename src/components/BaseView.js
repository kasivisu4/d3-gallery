import React, { Component } from "react";
import PropTypes from "prop-types";
export default class BaseView extends Component {
  displayChildren = () => {
    return <div>{this.props.children}</div>;
  };
  render() {
    return (
      <div>
        <nav className="navbar  navbar-dark bg-dark p-4">
          <h1 className="navbar-brand fs-1" style={{ color: "#F2B5B5" }}>
            Data Driven Gallery
          </h1>
          <img
            src="/d3-gallery/d3.png"
            className=""
            width="60"
            height="60"
            alt=""
          />
        </nav>
        {this.displayChildren()}
        <footer className="position-relative  bottom-0 bg-dark p-1 min-vw-100">
          <p className="font-weight-normal text-white">© 2022 MIT</p>
        </footer>
      </div>
    );
  }
}

BaseView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
