import Axios from "axios";
import React, { Component } from "react";
import Hostinfo from "./RequestInfo";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { userid: window.localStorage.getItem("userinfo").userid };
  }

  state = {
    title: "",
    color: "#82e4e6",
    contents: "",
    date: "",
    end: "",
    private: "",
    starttime: "",
    endtime: "",
    allday: true,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = async () => {
    try {
      const {
        title,
        color,
        date,
        end,
        starttime,
        endtime,
        contents,
        id,
        privated,
      } = this.state;
      await Axios({
        method: "post",
        url: `http://${Hostinfo.host}:${Hostinfo.port}/addcalendar`,
        data: {
          title,
          starttime,
          color,
          date,
          contents,
          endtime,
          end,
          allday: false,
          id: JSON.parse(window.localStorage.getItem("userinfo")).userid,
          privated: privated,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        title: "",
        date: "",
        end: "",
        contents: "",
        starttime: "",
        endtime: "",
      });
    }
  };
  render() {
    function Top() {
      var top = document.getElementsByClassName("calendarbackboard")[0];
      top.scrollTo({ top: 0, behavior: "smooth" });
    }
    console.log(this.state);
    return (
      <>
        <div className={"Add-Calendar"}>
          <center>
            일정 제목 &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className={"Add-Calendar-TitleBar"}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            일정 상세
            <textarea
              className={"Add-Calendar-ContentsBar"}
              name="contents"
              value={this.state.contents}
              onChange={this.handleChange}
              cols="30"
              rows="30"
            />
            <br />
            일정 시작 일시 &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="time"
              name="starttime"
              value={this.state.starttime}
              onChange={this.handleChange}
            />
            <br />
            일정 종료 일시 &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="date"
              name="end"
              value={this.state.end}
              onChange={this.handleChange}
            />
            <input
              type="time"
              name="endtime"
              value={this.state.endtime}
              onChange={this.handleChange}
            />
          </center>
          <br />
          일정 분류 &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="privated"
            value="0"
            onChange={this.handleChange}
          />{" "}
          부서일정
          <input
            type="radio"
            name="privated"
            value="1"
            onChange={this.handleChange}
          />{" "}
          개인일정
          <br />
          캘린더 표시 색상 &nbsp;&nbsp;&nbsp;&nbsp;
          <select name="color" onChange={this.handleChange}>
            <option value="#82e4e6">하늘색 </option>
            <option value="#f4a6d0">분홍색 </option>
            <option value="#d1f17c">연두색 </option>
            <option value="#d1a77c">베이지색 </option>
            <option value="#a8a7fd">보라색 </option>
            <option value="#545755">회색 </option>
            <option value="#ff1b1b">빨간색 </option>
            <option value="#fff648">노란색 </option>
          </select>
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              this.handleClick();
              this.setState({ title: "", date: "", end: "" });
            }}
          >
            일정등록
          </button>
          <br />
          <br />
          <button onClick={Top}>TOP</button>
        </div>
      </>
    );
  }
}
export default Events;
