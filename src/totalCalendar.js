import React, { Component } from "react";
import CalendarAll from "./Calendarall";
import CalendarList from "./Calendarlist";
import CalendarTime from "./CalendarTime";
import Events from "./addcal";
import BoardDiv from "./Boarddiv";
class TotalCalendar extends React.Component {
  render() {
    function AddCal() {
      var top = document.getElementsByClassName("calendarbackboard")[0];
      top.scrollTo({ top: 3200, behavior: "smooth" });
    }
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
