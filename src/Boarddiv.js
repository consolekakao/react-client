import React from "react";
import "./App.css";
import Axios from "axios";
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
                    <a href={`http://daum.net`} target={`_blank`}>
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
export default BoardDiv;
