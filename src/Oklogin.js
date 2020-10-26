import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
import Axios from "axios";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Navbar from "./Navbar";
class Oklogin extends Component {
  // constructor에서 하는 일이 state 선언밖에 없다면, 제거하는게 좋아보임
  state = {
    caldata: [],
    username: [],
    //  userdiv: [],
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    setTimeout(async () => {
      try {
        const calData = await Axios.post("http://172.22.200.49:3002/cal");
        //const userName = JSON.parse(localStorage.getItem("userinfo"));
        this.setState({ caldata: calData.data });
        // this.setState({ userdiv: userName.userdivcode });

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
    /**
     * 빼라 뒤지기싫으면
     * caldata를 자식 컴포넌트에서 쓰고 싶으면 거기서 차라리 구조분해 할당해서 사용
     */
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
