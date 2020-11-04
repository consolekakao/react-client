import React from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
class BoardDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userdiv: this.props.userdivcode };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    setTimeout(async () => {
      try {
        const board = await Axios.post("http://localhost:3002/boarddiv", {
          userdiv: this.state.userdiv,
        });
        this.setState({ board: board.data });
      } catch (error) {}
    }, 10);
    console.log("Now state");
    setInterval(async () => {
      try {
        const board = await Axios.post("http://localhost:3002/boarddiv", {
          userdiv: this.state.userdiv,
        });
        this.setState({ board: board.data });
      } catch (error) {}
    }, 20500);
  };
  render() {
    const { board } = this.state;
    return (
      <>
        {" "}
        부서 게시판
        <br />
        <br />
        <div className="BoardDiv">
          {board &&
            board.map((board, pri) => {
              return (
                <div>
                  <div key={pri}>
                    <Link
                      to={{
                        pathname: "/boardread",
                        state: {
                          idx: board.idx,
                          title: board.title,
                          writer: board.writer,
                          contents: board.contents,
                        },
                      }}
                    >
                      <div>
                        {`  ${board.idx}`}
                        {`${decodeURI(board.title)}`}{" "}
                        {`WRITER:     ${decodeURI(board.writer)}`}{" "}
                      </div>
                    </Link>
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
export default BoardDiv;
