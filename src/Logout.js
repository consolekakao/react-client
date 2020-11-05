import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  render() {
    function logout() {
      window.localStorage.clear();
    }

    return (
      <>
        <Link to="/">
          <button onClick={logout}>로그아웃</button>
        </Link>
      </>
    );
  }
}

export default Logout;
