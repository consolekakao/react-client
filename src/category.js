import Axios from "axios";
import React, { Component } from "react";
import Hostinfo from "./RequestInfo";
class Category extends Component {





  render() {
    return (
      <>
        <ul>
          <li
            onClick={clickMyInfo}
            onMouseOver={onMouseMyinfo}
            onMouseOut={outMouseMyinfo}
            className={"menu-List-Myinfo"}
          >
            MY info
          </li>
          <li
            onClick={clickCalendar}
            onMouseOver={onMouseMyCalendar}
            onMouseOut={outMouseCalendar}
            className={"menu-List-Calendar"}
          >
            Calendar
          </li>
          <li
            onClick={clickBoard}
            onMouseOver={onMouseBoard}
            onMouseOut={outMouseBoard}
            className={"menu-List-Board"}
          >
            Board
          </li>
          <li
            onClick={clickFtp}
            onMouseOver={onMouseFtp}
            onMouseOut={outMouseFtp}
            className={"menu-List-Ftp"}
          >
            FTP
          </li>
        </ul>
      </>
    );
  }
}
//////////////////////////////////////////////////////
//마우스 아웃시

function outMouseMyinfo() {
  document.getElementsByClassName("menu-List-Myinfo")[0].style.color =
    "#727272";
}
function outMouseCalendar() {
  document.getElementsByClassName("menu-List-Calendar")[0].style.color =
    "#727272";
}
function outMouseBoard() {
  document.getElementsByClassName("menu-List-Board")[0].style.color = "#727272";
}
function outMouseFtp() {
  document.getElementsByClassName("menu-List-Ftp")[0].style.color = "#727272";
}
//////////////////////////////////////////////////////
// 마우스 오버시
function onMouseMyinfo() {
  document.getElementsByClassName("menu-List-Myinfo")[0].style.color =
    "#FFFFFF";
  document.getElementsByClassName("menu-List-Myinfo")[0].style.cursor =
    "default";
}
function onMouseMyCalendar() {
  document.getElementsByClassName("menu-List-Calendar")[0].style.color =
    "#FFFFFF";
  document.getElementsByClassName("menu-List-Calendar")[0].style.cursor =
    "default";
}
function onMouseBoard() {
  document.getElementsByClassName("menu-List-Board")[0].style.color = "#FFFFFF";
  document.getElementsByClassName("menu-List-Board")[0].style.cursor =
    "default";
}
function onMouseFtp() {
  document.getElementsByClassName("menu-List-Ftp")[0].style.color = "#FFFFFF";
  document.getElementsByClassName("menu-List-Ftp")[0].style.cursor = "default";
}
//////////////////////////////////////////////////////////
//마우스 클릭이벤트
function clickMyInfo() {
  
  document
    .getElementsByClassName("front-Main")[0]
    .scrollTo({ top: 0, behavior: "smooth" });
}

async function clickCalendar() {
 
    var responseData = await Axios.post(
      `http://${Hostinfo.host}:${Hostinfo.port}/cal`
    );
  
  
 // this.setState({ caldata: responseData });
  


  document
    .getElementsByClassName("front-Main")[0]
    .scrollTo({ top: 1200, behavior: "smooth" });

}
function clickBoard() {
  document
    .getElementsByClassName("front-Main")[0]
    .scrollTo({ top: 2400, behavior: "smooth" });
}
function clickFtp() {
  document
    .getElementsByClassName("front-Main")[0]
    .scrollTo({ top: 3600, behavior: "smooth" });
}
/////////////////////////////////////////////////////////////
export default Category;
