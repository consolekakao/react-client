import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
import Axios from "axios";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Navbar from "./Navbar";
class Oklogin extends Component {
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

  init = async () => {
    try {
      const calData = await Axios.post("http://172.22.200.49:3002/cal");

      this.setState({ caldata: calData.data });
    } catch (error) {
      console.error(error);
      this.setState({ caldata: [] });
    }
    setInterval(async () => {
      try {
        const calData = await Axios.post("http://172.22.200.49:3002/cal");

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
      <>
        <Navbar name={this.state.username} grade={this.state.userdiv} />
        <div className={"bodyall"}>
          <div className={"calendarbackboard"}>
            <div className={"calendar"}>
              <Fullcalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth" // dayGridWeek,
                weekends={true}
                events={filteredData}
              />
            </div>
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
