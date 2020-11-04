import React, { Component, Conponent } from "react";
import "./App.css";
class CalendarColor extends Component {
  render() {
    return (
      <>
        <div className={"calendarColorPurple"} />
        전체 일정
        <div className={"calendarColorBasic"} />
        학년 일정
        <div className={"calendarColorPink"} />
        개인 일정
      </>
    );
  }
}
export default CalendarColor;
