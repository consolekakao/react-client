import React from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
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
    }, 200);

    setInterval(async () => {
      try {
        const board = await Axios.post("http://localhost:3002/boardall");
        this.setState({ board: board.data });
      } catch (error) {
        console.error(error);
        this.setState({ board: [] });
      }
    }, 3000);
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
            board.map((board, index) => {
              return (
                <div key={index}>
                  <Link
                    to={{
                      pathname: "/boardread",
                      state: {
                        idx: board.idx,
                        title: board.title,
                        writer: board.writer,
                        contents: board.contents,
                        date: board.date,
                      },
                    }}
                  >
                    <div>
                      {`  ${board.idx}`}
                      {`${decodeURI(board.title)}`}{" "}
                      {`WRITER:     ${decodeURI(board.writer)}`}{" "}
                      {`DATE:    ${decodeURI(board.date)}`}{" "}
                    </div>
                  </Link>

                  <hr />
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default BoardAll;
