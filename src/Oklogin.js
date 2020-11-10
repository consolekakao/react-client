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

  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  render() {
    if (!window.localStorage.getItem("userinfo")) {
      const { history } = this.props;
      history.push("/");
    }
    var temp;

    function checkScroll() {
      var scrollLoaction = document.getElementsByClassName("front-Main")[0]
        .scrollTop;
      console.log("seroll:   " + scrollLoaction);

      console.log("temp before :" + temp);
      if (scrollLoaction > temp) {
        if (scrollLoaction <= "300" && scrollLoaction >= "250") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 1200, behavior: "smooth" });
        }

        if (scrollLoaction <= "1700" && scrollLoaction >= "1600") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 2450, behavior: "smooth" });
        }

        if (scrollLoaction <= "2900" && scrollLoaction >= "2800") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 3600, behavior: "smooth" });
        }
      } else {
        if (scrollLoaction >= "600" && scrollLoaction <= "800") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 0, behavior: "smooth" });
        }
        if (scrollLoaction >= "1800" && scrollLoaction <= "2000") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 1200, behavior: "smooth" });
        }
        if (scrollLoaction >= "3000" && scrollLoaction <= "3200") {
          document
            .getElementsByClassName("front-Main")[0]
            .scrollTo({ top: 2450, behavior: "smooth" });
        }
      }

      temp = scrollLoaction;
    }

    return (
      <>
        <div className={"front"} onScroll={checkScroll}>
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
              <Logout />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Oklogin;
