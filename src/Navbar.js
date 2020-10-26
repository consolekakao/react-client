import React from "react";

function logout() {
  window.localStorage.clear();
  this.history.push("/");
}

class Navbar extends React.Component {
  state = {
    username: [],
  };

  render() {
    return (
      <>
        <div className={"Navbar"}>
          test
          <button onClick={logout}>로그아웃</button>
        </div>
      </>
    );
  }
}

export default Navbar;
