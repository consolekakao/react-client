import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
import Navbar from "./Navbar";
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
      caldata: "",
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

    function AddCal() {
      var top = document.getElementsByClassName("calendarbackboard")[0];
      top.scrollTo({ top: 1600, behavior: "smooth" });
    }
    function AddBoard() {
      var boardtop = document.getElementsByClassName("boardbackboard")[0];
      boardtop.scrollTo({ top: 1600, behavior: "smooth" });
    }
    return (
      <>
        <Navbar name={this.state.username} grade={this.state.userdiv} />
        <div className={"bodyall"}>
          <div className={"calendarbackboard"}>
            <button onClick={AddCal}>일정추가하기</button>
            <div className={"calendar"}>
              <CalendarAll userid={this.state.userid} />
            </div>

            <div className={"calendar"}>
              <CalendarList />
            </div>
            <Events />
          </div>
          <div className={"boardbackboard"}>
            <button onClick={AddBoard}>게시글 작성</button>
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
