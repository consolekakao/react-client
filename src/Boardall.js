import React from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Hostinfo from "./RequestInfo";
class BoardAll extends React.Component {
  state = {
    board: [],
  };

  componentWillMount() {
    const logininfo = JSON.parse(localStorage.getItem("userinfo"));
    if (!logininfo) {
      this.props.history.push("/");
      return;
    }
    this.setState({
      userdiv: JSON.parse(localStorage.getItem("userinfo")).userdivcode,
      username: JSON.parse(localStorage.getItem("userinfo")).username,
      userid: JSON.parse(localStorage.getItem("userinfo")).userid,
    });
    this.init();
  }

  init = async () => {
    try {
      const board = await Axios.post(
        `http://${Hostinfo.host}:${Hostinfo.port}/boardall`
      );
      this.setState({ board: board.data });
    } catch (error) {
      console.error(error);
      this.setState({ board: [] });
    }

    setInterval(async () => {
      try {
        const board = await Axios.post(
          `http://${Hostinfo.host}:${Hostinfo.port}/boardall`
        );
        this.setState({ board: board.data });
      } catch (error) {
        console.error(error);
        this.setState({ board: [] });
      }
    }, 10000);
  };

  render() {
    const { board } = this.state;
    return (
      <>
        {" "}
        <div className={"boardFormTitleColor"}>전체 게시판</div>
        <hr /> <br />
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
              );
            })}
        </div>
      </>
    );
  }
}
export default BoardAll;
