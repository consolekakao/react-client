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

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
