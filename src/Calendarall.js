import React, { Component } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionplugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Axios from "axios";

class Calendarall extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
    userid: [],
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
  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  init = async () => {
    try {
      const calData = await Axios.post("http://172.22.200.49:3002/cal", {
        userdiv: this.state.userdiv,
        userid: this.state.userid,
      });

      this.setState({ caldata: calData.data });
    } catch (error) {
      console.error(error);
      this.setState({ caldata: [] });
    }
    setInterval(async () => {
      try {
        const calData = await Axios.post("http://172.22.200.49:3002/cal", {
          userdiv: this.state.userdiv,
          userid: this.state.userid,
        });

        this.setState({ caldata: calData.data });
      } catch (error) {
        console.error(error);
        this.setState({ caldata: [] });
      }
    }, 5000);
  };

  render() {
    if (!window.localStorage.getItem("userinfo")) {
      const { history } = this.props;
      history.push("/");
    }

    const { caldata } = this.state;

    const filteredData = caldata.map(
      ({ title, color, date, end, contents }) => ({
        title,
        color,
        date,
        end,
        contents,
      })
    );

    return (
      <Fullcalendar
        plugins={[dayGridPlugin, interactionplugin, timeGridPlugin]} //interactionplugin :Day Click Event
        initialView="dayGridMonth" // dayGridWeek,
        weekends={true}
        dateClick={this.handleDateClick}
        eventClick={function (arg) {
          console.log(arg);
          alert(
            "일정 시작일:  " +
              arg.event.startStr +
              "\r\n일정 종료일:  " +
              arg.event.endStr +
              "\r\n일정 주제:  " +
              arg.event.title +
              "\r\n일정 상세:  "
          );
        }}
        editable={true}
        selectable={true}
        select={function selectDate(arg) {
          console.log(arg.start);
          var title = prompt("일정 주제 입력 :   ");
          var contents = prompt("일정 상세 내용 입력 :  ");
          var privated = prompt("전체 공개 일정: 0  \r\n 개인 일정: 1");
          var color = prompt(
            "색상선택: \r\n 1:하늘색 \r\n 2:분홍색 \r\n 3:연두색 \r\n 4:노란색 \r\n 5:보라색 \r\n  \r\n 전체공개 일정은 색상이 베이지색으로 고정됩니다. \r\n 미선택시 파란색으로 등록됩니다."
          );

          switch (color) {
            case "1":
              color = "#82e4e6";
              break;
            case "2":
              color = "#f4a6d0";
              break;
            case "3":
              color = "#d1f17c";
              break;
            case "4":
              color = "#fff648";
              break;
            case "5":
              color = "#a8a7fd";
              break;
            default:
              color = "#4B89DC";
          }
          if (title) {
            Axios({
              method: "post",
              url: "http://172.22.200.49:3002/addCalendarDrag",
              data: {
                title,
                color: color,
                startdate: arg.start,
                contents: "Standard",
                enddate: arg.end,
                allday: true,
                id: JSON.parse(window.localStorage.getItem("userinfo")).userid,
                privated: "0",
              },
            });
          }
        }}
        displayEventTime={true}
        events={filteredData}
      />
    );
  }
}

export default Calendarall;
