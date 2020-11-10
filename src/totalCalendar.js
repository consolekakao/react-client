import React, { Component } from "react";
import CalendarAll from "./Calendarall";
import CalendarList from "./Calendarlist";
import CalendarTime from "./CalendarTime";
class TotalCalendar extends React.Component {
  render() {
    return (
      <>
        <div className={"calendarbackboard"}>
          <div className={"calendar-main"}>
            <CalendarAll />
          </div>
        </div>

        <div className={"calendarbackboard-side-one"}>
          <div className={"calendar-side-one"}>
            <CalendarList />
          </div>
        </div>

        <div className={"calendarbackboard-side-two"}>
          <div className={"calendar-side-two"}>
            <CalendarTime />
          </div>
        </div>
      </>
    );
  }
}

export default TotalCalendar;
