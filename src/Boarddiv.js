import React from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Hostinfo from "./RequestInfo";
class BoardDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userdiv: this.props.userdivcode, userid: this.props.userid };
  }

  componentDidMount() {
    this.init();
  }

  init = async () => {
    try {
      const board = await Axios.post(
        `http://${Hostinfo.host}:${Hostinfo.port}/boarddiv`,
        {
          userdiv: this.state.userdiv,
        }
      );
      this.setState({ board: board.data });
    } catch (error) {}

    console.log("Now state");
    setInterval(async () => {
      try {
        const board = await Axios.post(
          `http://${Hostinfo.host}:${Hostinfo.port}/boarddiv`,
          {
            userdiv: this.state.userdiv,
          }
        );
        this.setState({ board: board.data });
      } catch (error) {}
    }, 10000);
  };

  componentWillMount() {
    if (this.props.userid && this.props.userdiv) {
    } else {
      //   this.props.history.push("/");
      return;
    }
  }

  render() {
    const { board } = this.state;
    return (
      <>
        {" "}
        <div className={"boardFormTitleColor"}>부서 게시판</div>
        <hr />
        <br />
        <br />
        <div className="BoardDiv">
          {board &&
            board.map((board, index) => {
              return (
                <div>
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
                      <div className={"boardform"}>
                        <div className={"boardtitle"}>
                          {`${decodeURI(board.title)}`}{" "}
                        </div>
                        <div className={"boardwriter"}>
                          {`     ${decodeURI(board.writer)}`}{" "}
                        </div>
                        <div className={"boarddate"}>
                          {`   ${decodeURI(board.date)}`}{" "}
                        </div>
                      </div>
                    </Link>
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
