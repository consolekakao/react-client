import React from "react";
import Routes from "./Routes";
import "./App.css";
import Navbar from "./Navbar";
class App extends React.Component {
  state = {
    id: "",
    pw: "",
    nickname: "",
    divcode: "",
    islogin: "",
  };

  componentWillMount() {
    this.init()
  }

  init = async () => {
    try {
      const logininfo = JSON.parse(localStorage.getItem("userinfo"));
      if (!logininfo) {
        alert("로그인정보없음");
        return;
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
