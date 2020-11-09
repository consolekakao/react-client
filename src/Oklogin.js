import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
import Navbar from "./Navbar";
import TotalCalendar from "./totalCalendar";
import Category from "./category";
import TotalBoard from "./totalBoard";
class Oklogin extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
    userid: [],
    islogin: false,
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
      islogin: JSON.parse(localStorage.getItem("userinfo")).islogin,
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

    function AddBoard() {
      var boardtop = document.getElementsByClassName("boardbackboard")[0];
      boardtop.scrollTo({ top: 1600, behavior: "smooth" });
    }
    return (
      <>
        <div className={"front"}>
          <div className={"front-Category"}>
            <Navbar name={this.state.username} grade={this.state.userdiv} />{" "}
            <div className={"front-Category-Menu"}>
              <Category />
            </div>
          </div>

          <div className={"front-Main"}>
            <TotalCalendar />

            <div className={"boardbackboard"}>
              <button onClick={AddBoard}>게시글 작성</button>
              <div className={"inboardall"}>
                <BoardAll />
              </div>
              <br />
              <div className={"inboardall"}>
                <BoardDiv
                  userdivcode={this.state.userdiv}
                  userid={this.state.userid}
                />
              </div>
            </div>

            <TotalBoard
              userdivcode={this.state.userdiv}
              userid={this.state.userid}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Oklogin;
