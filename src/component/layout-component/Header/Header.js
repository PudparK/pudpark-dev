import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "./pk-development-large-bg-white.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleHeader = this.toggleHeader.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleHeader() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    let mobileClose = this.state.isOpen ? "" : " mobile-close";

    return (
      <nav className="py-3">
        <div className="items-center justify-between flex-wrap flex container mx-auto">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to="/" onClick={this.toggleClose}>
              <img src={logo} alt="PudparK Developer" />
            </Link>
          </div>
          <div className="block lg:hidden" onClick={this.toggleHeader}>
            <button className="flex items-center px-3 py-2 rounded hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title> Menu </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={"w-full block lg:w-auto" + mobileClose}>
            <div className="text-xl">
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                to="/project"
                onClick={this.toggleClose}
              >
                Projects
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                to="/blog"
                onClick={this.toggleClose}
              >
                Blog
              </Link>
              <Link
                className="inline-block text-xl px-4 py-2 leading-none border rounded border-red hover:border-transparent hover:bg-red hover:text-black mt-4 lg:mt-0"
                to="/resume"
                onClick={this.toggleClose}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
