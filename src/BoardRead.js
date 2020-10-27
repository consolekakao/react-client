import React from "react";

class BoardRead extends React.Component {
  render() {
    const { params } = this.props.match;
    return <div>{params.idx}</div>;
  }
}
export default BoardRead;
