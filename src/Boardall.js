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
                  <a
                    href={`readboard/${board.idx}`}
                    data-toggle={"modal"}
                    target={`_blank`}
                  >
                    <div>
                      {`  ${board.idx}`}
                      {`${decodeURI(board.title)}`}{" "}
                      {`WRITER:     ${decodeURI(board.writer)}`}{" "}
                    </div>
                  </a>

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
