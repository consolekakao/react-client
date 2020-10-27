import React from "react";
import Routes from "./Routes";
import "./App.css";
class App extends React.Component {
  state = {
    id: "",
    pw: "",
    nickname: "",
    divcode: "",
    islogin: "",
  };

  componentWillMount() {
    this.init();
  }

  init = async () => {
    try {
      const logininfo = JSON.parse(localStorage.getItem("userinfo"));
      if (!logininfo) {
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
