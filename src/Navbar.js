import React from "react";
import Logout from "./Logout";

class Navbar extends React.Component {
  state = {
    username: [],
  };

  render() {
    return (
      <>
        <div className={"Navbar"}>
          <Logout />
        </div>
      </>
    );
  }
}

export default Navbar;
