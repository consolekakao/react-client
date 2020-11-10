import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={"Navbar"}>
          <div className={"nav-Left"}>
            {decodeURI(this.props.grade)}학년
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {decodeURI(this.props.name)}
          </div>
          <img
            className={"nav-Right"}
            src={"http://alpacao.cafe24.com/can/src1.png"}
          />
        </div>
      </>
    );
  }
}

export default Navbar;
