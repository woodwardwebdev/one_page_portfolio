import React, { Component } from "react";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="side-menu">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Bonus Recipes</li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
