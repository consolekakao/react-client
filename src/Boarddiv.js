import React from "react";
import "./App.css";
import Axios from "axios";
class BoardDiv extends React.Component {
  state = {};

  componentDidMount() {
    this.init();
  }

  init = () => {
    console.log("Now state");
    const divcode = this.props;
    console.log(divcode);
    setTimeout(async () => {
      try {
        const board = await Axios.post("http://172.22.200.49:3002/boarddiv", {
          userdiv: divcode,
        });
        this.setState({ board: board.data });
      } catch (error) {
        // console.error(error);
        this.setState({ board: [] });
      }
    }, 100);
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
