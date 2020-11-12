import React, { Component } from "react";
import Navbar from "./Navbar";
import TotalCalendar from "./totalCalendar";
import Category from "./category";
import TotalBoard from "./totalBoard";
import Logout from "./Logout";
import Scroll from "./ScrollCheck";
import Swal from "sweetalert2";
import Ftp from "./Ftp";
class Oklogin extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
    userid: [],
    profilesrc: [],
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
      profilesrc: JSON.parse(localStorage.getItem("userinfo")).userprofilesrc,
    });
  }

  componentDidMount() {
    console.log(this.state);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${decodeURI(this.state.userdiv)}부서 <br/>    ${decodeURI(
        this.state.username
      )}님 환영합니다.`,
      showConfirmButton: false,
      timer: 3000,
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

    const scrollCheck = () => Scroll();

    return (
      <>
        <div className={"front"} onScroll={scrollCheck}>
          <div className={"front-Category"}>
            <Navbar
              name={this.state.username}
              grade={this.state.userdiv}
              profilesrc={this.state.profilesrc}
            />{" "}
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
              <Ftp
                userdivcode={this.state.userdiv}
                userid={this.state.userid}
              />

              <Logout />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Oklogin;
