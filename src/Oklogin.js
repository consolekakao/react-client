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

  componentDidMount() {
    this.init();
  }

  init = () => {
    setTimeout(async () => {
      try {
        const calData = await Axios.post("http://172.22.200.49:3002/cal");
        const userName = JSON.parse(localStorage.getItem("userinfo"));
        this.setState({ caldata: calData.data });
        this.setState({ userdiv: userName.userdivcode });
        console.log("aaa");
        console.log(this.state);
      } catch (error) {
        console.error(error);
        this.setState({ caldata: [] });
      }
    }, 100);
  };

  render() {
    if (window.localStorage.length === 0) {
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
        <Navbar />
        <div className={"bodyall"}>
          {this.state.userdiv} 님 반갑습니다.
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
