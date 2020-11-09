import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <ul>
        <li className={"menu-List"}>MY info</li>
        <li className={"menu-List"}>Calendar</li>
        <li className={"menu-List"}>Board</li>
        <li className={"menu-List"}>FTP</li>
      </ul>
    );
  }
}

export default Category;
