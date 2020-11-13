import React, { Component } from "react";
import "./App.css";
import Hostinfo from "./RequestInfo";
class Signup extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChange1 = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form
          action={`http://${Hostinfo.host}:${Hostinfo.port}/signup`}
          method="post"
          name="form"
        >
          아이디 <input type="text" name="id" id="id" /> <br />
          패스워드 <input type="password" name="pw" id="pw" />
          <br />
          패스워드 재입력 <input type="password" name="ck_pw" id="ck_pw" />
          <br />
          이름 <input type="text" name="name" id="name" />
          <br />
          부서{" "}
          <select onChange={this.handleChange} name="DIV" id="DIV">
            <option value="개발 1">개발 1</option>
            <option value="개발 2">개발 2</option>
            <option value="영업">영업</option>
            <option value="인사">인사</option>
          </select>
          <br />
          연락처 <input type="text" name="phone" id="phone" />
          <br />
          이메일주소 <input type="text" name="adress" id="adress" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Signup;
