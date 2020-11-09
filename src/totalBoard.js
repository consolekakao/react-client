import React, { Component } from "react";
import BoardAll from "./Boardall";
import BoardDiv from "./Boarddiv";
class TotalBoard extends Component {
  render() {
    return (
      <div className={"boardbackboard"}>
        <div className={"inboardall"}>
          <BoardAll />
        </div>
        <br />
        <div className={"inboardall"}>
          <BoardDiv
            userdivcode={this.props.userdiv}
            userid={this.props.userid}
          />
        </div>
      </div>
    );
  }
}

export default TotalBoard;
