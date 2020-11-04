import React, { Component } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionplugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Axios from "axios";
import CalendarColor from "./CalendarColor";
import listplugin from "@fullcalendar/list";

class Calendarall extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
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
    });
    this.init();
  }
  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  init = async () => {
    try {
      const calData = await Axios.post("http://localhost:3002/cal", {
        userdiv: this.state.userdiv,
      });

      this.setState({ caldata: calData.data });
    } catch (error) {
      console.error(error);
      this.setState({ caldata: [] });
    }
    setInterval(async () => {
      try {
        const calData = await Axios.post("http://172.22.200.49:3002/cal", {
          userdiv: this.state.userdiv,
        });

        this.setState({ caldata: calData.data });
      } catch (error) {
        console.error(error);
        this.setState({ caldata: [] });
      }
    }, 5000);
  };

  render() {
    if (!window.localStorage.getItem("userinfo")) {
      const { history } = this.props;
      history.push("/");
    }

    const { caldata } = this.state;

    const filteredData = caldata.map(({ title, color, date, end }) => ({
      title,
      color,
      date,
      end,
    }));

    return (
      <Fullcalendar
        plugins={[dayGridPlugin, interactionplugin, timeGridPlugin]} //interactionplugin :Day Click Event
        initialView="dayGridMonth" // dayGridWeek,
        weekends={true}
        dateClick={this.handleDateClick}
        selectable={true}
        displayEventTime={true}
        events={filteredData}
      />
    );
  }
}

export default Calendarall;