import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
import Axios from "axios";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionplugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Navbar from "./Navbar";
import CalendarColor from "./CalendarColor";
import listplugin from "@fullcalendar/list";
import Events from "./addcal";
import CalendarAll from "./Calendarall";
import CalendarList from "./Calendarlist";
class Oklogin extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
    userid: [],
  };
  componentWillMount() {
    const logininfo = JSON.parse(localStorage.getItem("userinfo"));
    if (!logininfo) {
      this.props.history.push("/");
      return;
    }
    this.setState({
      userdiv: JSON.parse(localStorage.getItem("userinfo")).userdivcode,
      username: JSON.parse(localStorage.getItem("userinfo")).username,
      userid: JSON.parse(localStorage.getItem("userinfo")).userid,
    });
  }

  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  render() {
    if (!window.localStorage.getItem("userinfo")) {
      const { history } = this.props;
      history.push("/");
    }

    function Add() {
      var top = document.getElementsByClassName("calendarbackboard")[0];
      top.scrollTo({ top: 1600 });
    }

    return (
      <>
        <Navbar name={this.state.username} grade={this.state.userdiv} />
        <div className={"bodyall"}>
          <div className={"calendarbackboard"}>
            <CalendarColor />

            <button onClick={Add}>일정추가하기</button>
            <div className={"calendar"}>
              <CalendarAll userid={this.state.userid} />
            </div>

            <div className={"calendar"}>
              <CalendarList />
            </div>
            <Events />
          </div>
          <div className={"boardbackboard"}>
            <div className={"inboardall"}>
              <BoardAll />
            </div>
            <br />
            <div className={"inboardall"}>
              <BoardDiv userdivcode={this.state.userdiv} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Oklogin;
