import React from "react";
class Logout extends React.Component {
  render() {
    //  window.localStorage.clear();
    this.props.history.push("/");
    return <></>;
  }
}

export default Logout;
