import React, { Component } from "react";
import "./App.css";

class Profile extends Component {
  render() {
    const data = window.localStorage.getItem("username");
    return <div>{data} 님 반갑습니다.</div>;
  }
}
export default Profile;
