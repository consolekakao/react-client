import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  state = {
    id: "1580",
    pw: "test",
    divcode: "0000",
    islogin: false,
  };

  handleid = (e) => {
    this.setState({ id: e.target.value });
  };

  handlepw = (e) => {
    this.setState({ pw: e.target.value });
  };

  handlelogin = (e) => {
    e.preventDefault();
    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" },
    };
    window.localStorage.clear();
    fetch("http://172.22.200.49:3002/login", login_info)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.islogin) {
          //로그인 성공시
          window.localStorage.setItem("userinfo", JSON.stringify(json));
          const {
            username,
            usergrade,
            userdivcode,
            userphone,
            useraddress,
            userjoin_co,
            userprofilesrc,
          } = json;
          this.setState({
            username,
            usergrade,
            userdivcode,
            userphone,
            useraddress,
            userjoin_co,
            userprofilesrc,
            id: "",
            pw: "",
          });
          const { history } = this.props;
          history.push("/home");
        } else {
          alert("please check id or pw");
        }
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <div>
            <input
              placeholder="아이디입력"
              value={this.state.id}
              onChange={this.handleid}
            />
          </div>
          <div>
            <input
              placeholder="패스워드입력"
              value={this.state.pw}
              onChange={this.handlepw}
            />
          </div>
          <div>
            <button onClick={this.handlelogin}>로그인</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
