import React from "react";
import "./App.css";

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
        <br />
        일자 : {decodeURI(this.props.location.state.date)}
      </div>
    );
  }
}

export default BoardRead;
