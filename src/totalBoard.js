import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
class TotalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { userdiv: this.props.userdivcode, userid: this.props.userid };
  }
  render() {
    console.log("1111111111111");
    console.log(this.state);
    return (
      <>
        <div className={"temp"}>
          <div className={"boardbackboard"}>
            <div className={"inboardall"}>
              <BoardAll />
            </div>
            <br />
            <div className={"inboardall"}>
              <BoardDiv
                userdivcode={this.state.userdiv}
                userid={this.state.userid}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TotalBoard;
