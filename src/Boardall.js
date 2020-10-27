import React from "react";
import "./App.css";
import Axios from "axios";

class BoardAll extends React.Component {
  state = {
    board: [],
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    setTimeout(async () => {
      try {
        const board = await Axios.post("http://localhost:3002/boardall");
        this.setState({ board: board.data });
      } catch (error) {
        console.error(error);
        this.setState({ board: [] });
      }
    }, 100);
  };

  render() {
    const { board } = this.state;
    return (
      <>
        {" "}
        전체게시판
        <br />
        <br />
        <div className="BoardAll">
          {board &&
            board.map((board, pri) => {
              return (
                <div>
                  <div key={pri}>
                    <a href={`http://naver.com`} target={`_blank`}>
                      <div>
                        {`  ${board.idx}`}
                        {`${decodeURI(board.title)}`}{" "}
                        {`WRITER:     ${decodeURI(board.writer)}`}{" "}
                      </div>
                    </a>
                    <hr />
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default BoardAll;
