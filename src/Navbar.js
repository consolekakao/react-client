import React from "react";
import Logout from "./Logout";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={"Navbar"}>
          {decodeURI(this.props.grade)}학년
          <br />
          {decodeURI(this.props.name)}님 반갑습니다.
          <Logout />
        </div>
      </>
    );
  }
}

export default Navbar;
