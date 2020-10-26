import Axios from "axios";
import React, { Component } from "react";

class Events extends Component {
    state = {
        title: "",
        color: "",
        date: "",
        end: "",
        allday: true,
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    handleClick = async () => {
        try {
            const { title, color, date, end } = this.state;
            await Axios({
                method: "post",
                url: "http://localhost:3002/addcalendar",
                data: {
                    title,
                    color,
                    date,
                    end: end + " 00:00:02",
                    allday: true,
                },
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ title: "", date: "", end: "" });
        }
    };
    render() {
        return (
            /*
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="end"
          value={this.state.end}
          onChange={this.handleChange}
        />
        <input type="radio" name="codetype" value="1" /> 전체일정
        <input type="radio" name="codetype" value="2" /> 부서일정
        <input type="radio" name="codetype" value="3" /> 개인일정
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
        <button
          onClick={() => {
            this.handleClick();
            this.setState({ title: "", date: "", end: "" });
          }}
        >
          일정등록
        </button>
      </div>
  */ <>

            </>
        );
    }
}
export default Events;
