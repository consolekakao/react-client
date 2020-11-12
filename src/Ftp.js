import React, { Component } from "react";
import "./App.css";
import Hostinfo from "./RequestInfo";
class Ftp extends Component {
  constructor(props) {
    super(props);
    this.state = { userid: window.localStorage.getItem("userinfo").userid };
  }
  render() {
    return (
      <div className={"BoardAll"}>
        <form
          action={`http://${Hostinfo.host}:${Hostinfo.port}/upload`}
          encType={"multipart/form-data"}
          method={"post"}
          target={"_blank"}
        >
          파일 : <input type="file" name="myFile" />
          <input type="hidden" name={"userid"} value={this.props.userid} />
          <button type="submit">upload</button>
        </form>
      </div>
    );
  }
}
export default Ftp;
