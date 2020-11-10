import React, { Component } from "react";
import Navbar from "./Navbar";
import TotalCalendar from "./totalCalendar";
import Category from "./category";
import TotalBoard from "./totalBoard";
import Logout from "./Logout";
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
            <div className={"section-Info"}></div>
            <div className={"section-Calendar"}>
              <TotalCalendar />
            </div>
            <div className={"section-Board"}>
              <TotalBoard
                userdivcode={this.state.userdiv}
                userid={this.state.userid}
              />
            </div>

            <div className={"section-Ftp"}>
              <Logout />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Oklogin;
