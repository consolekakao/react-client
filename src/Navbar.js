import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={"Navbar"}>
          <img className={"nav-profile"} src={this.props.profilesrc} />
          <br />
          <br />
          <br />
          <div className={"nav-info"}>
            {decodeURI(this.props.grade)}학년
            <br />
            <br />
            {decodeURI(this.props.name)}
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
