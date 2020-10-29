import React from "react";
import "./App.css";
import Axios from "axios";

class BoardRead extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <div className={"Readboard"}>
        게시글 번호 : {params.idx}
        <br />
        제목 : {params.title}
        <br />
        작성자 : {params.writer}
        <br />
        내용 : {params.contents}
      </div>
    );
  }
}

export default BoardRead;
