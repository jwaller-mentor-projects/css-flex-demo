import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header_wrapper">
        <div className="header_left">
          <div>Logo</div>
        </div>
        <div className="header_right">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
