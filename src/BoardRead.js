import React from "react";
import "./App.css";
import Axios from "axios";

class BoardRead extends React.Component {
  render() {
    const { params } = this.props.match;

    return (
      <div className={"Readboard"}>
        게시글 번호 : {this.props.location.state.idx}
        <br />
        제목 : {decodeURI(this.props.location.state.title)}
        <br />
        작성자 : {decodeURI(this.props.location.state.writer)}
        <br />
        내용 : {decodeURI(this.props.location.state.contents)}
      </div>
    );
  }
}

export default BoardRead;
