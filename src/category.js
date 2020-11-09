import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <ul>
        <li onClick={clickMyInfo} className={"menu-List"}>
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
    );
  }
}
function clickMyInfo() {
  var boardclick = document.getElementsByClassName("front-Main")[0];
  boardclick.scrollTo({ top: 0, behavior: "smooth" });
}

function clickCalendar() {
  var boardclick = document.getElementsByClassName("front-Main")[0];
  boardclick.scrollTo({ top: 1000, behavior: "smooth" });
}
function clickBoard() {
  var boardclick = document.getElementsByClassName("front-Main")[0];
  boardclick.scrollTo({ top: 3000, behavior: "smooth" });
}
function clickFtp() {
  alert("ftp");
}

export default Category;
