import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <>
        <ul>
          <li
            onClick={clickMyInfo}
            className={"menu-List"}
            onMouseUp={onMouseMyInfo}
          >
            MY info
          </li>
          <li onClick={clickCalendar} className={"menu-List"}>
            Calendar
          </li>
          <li onClick={clickBoard} className={"menu-List"}>
            Board
          </li>
          <li onClick={clickFtp} className={"menu-List"}>
            FTP
          </li>
        </ul>
      </>
    );
  }
}

function onMouseMyInfo() {
  var categoryOnMouse = document.getElementsByClassName("menu-List")[0];
}

function clickMyInfo() {
  var categoryClick = document.getElementsByClassName("front-Main")[0];
  categoryClick.scrollTo({ top: 0, behavior: "smooth" });
}

function clickCalendar() {
  var categoryClick = document.getElementsByClassName("front-Main")[0];
  categoryClick.scrollTo({ top: 1200, behavior: "smooth" });
}
function clickBoard() {
  var categoryClick = document.getElementsByClassName("front-Main")[0];
  categoryClick.scrollTo({ top: 2400, behavior: "smooth" });
}
function clickFtp() {
  var categoryClick = document.getElementsByClassName("front-Main")[0];
  categoryClick.scrollTo({ top: 3600, behavior: "smooth" });
}

export default Category;
