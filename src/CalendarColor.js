import React, { Component, Conponent } from "react";
import "./App.css";
class CalendarColor extends Component {
  render() {
    return (
      <>
        <div className={"calendarColorBackBoard"}>
          <div>
            <div className={"calendarColorPurple"}></div> 전체 일정
          </div>
          <div>
            <div className={"calendarColorBasic"}></div> 학년 일정
          </div>
          <div>
            <div className={"calendarColorPink"}></div> 개인 일정
          </div>
        </div>
      </>
    );
  }
}
export default CalendarColor;
