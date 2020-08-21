import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header wire">
        <h3>Colin Woodward</h3>
      </div>
    );
  }
}

export default Header;
