import React, { Component } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionplugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Axios from "axios";
import Hostinfo from "./RequestInfo";
import Swal from "sweetalert2";
import io from "socket.io-client";
var socket;
var con;
class Calendarall extends Component {
  state = {
    caldata: [],
    username: [],
    userdiv: [],
    userid: [],
    islogin: false,
  };

  componentWillMount() {
    const logininfo = JSON.parse(localStorage.getItem("userinfo"));
    if (!logininfo) {
      this.props.history.push("/");
      return;
    } else con = true;

    this.setState({
      userdiv: JSON.parse(localStorage.getItem("userinfo")).userdivcode,
      username: JSON.parse(localStorage.getItem("userinfo")).username,
      userid: JSON.parse(localStorage.getItem("userinfo")).userid,
      islogin: JSON.parse(localStorage.getItem("userinfo")).islogin,
    });
    this.init();
  }
  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  init = async () => {
    try {
      const calData = await Axios.post(
        `http://${Hostinfo.host}:${Hostinfo.port}/cal`,
        {
          userdiv: this.state.userdiv,
          userid: this.state.userid,
        }
      );

      this.setState({ caldata: calData.data });
    } catch (error) {
      console.error(error);
      this.setState({ caldata: [] });
    }
    setInterval(async () => {
      try {
        const calData = await Axios.post(
          `http://${Hostinfo.host}:${Hostinfo.port}/cal`,
          {
            userdiv: this.state.userdiv,
            userid: this.state.userid,
          }
        );

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
          var startdate = arg.event.startStr.substring(0, 16); //일정 시작
          var enddate = arg.event.startStr.substring(0, 16); //일정 종료
          var contents = arg.event.extendedProps.contents; //일정 상세

          Swal.fire({
            title: `${arg.event.title}`,
            html: `
          일정 시작일:  ${startdate} <br/>
          일정 종료일:  ${enddate} <br/>
          일정 상세 <br/>  
          ${contents}
           `,
          });
        }}
        editable={true}
        selectable={true}
        select={function selectDate(arg) {
          console.log(arg.start);
          var title = prompt("일정 주제 입력 :   ");

          if (title) {
            var contents = prompt("일정 상세 내용 입력 :  ");
            if (contents) {
              var privated = prompt(
                `
              전체 공개 일정: 0   
              개인 일정: 1`
              );
              if (privated) {
                var color = prompt(
                  `
                   색상선택: 
                   1:하늘색 
                   2:분홍색
                   3:연두색 
                   4:노란색
                   5:보라색
                   
                   전체공개 일정은 색상이 베이지색으로 고정됩니다.
                   미선택시 파란색으로 등록됩니다.`
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

                Axios({
                  method: "post",
                  url: `http://${Hostinfo.host}:${Hostinfo.port}/addCalendarDrag`,
                  data: {
                    title,
                    color: color,
                    startdate: arg.start,
                    contents: "Standard",
                    enddate: arg.end,
                    allday: true,
                    id: JSON.parse(window.localStorage.getItem("userinfo"))
                      .userid,
                    privated: "0",
                  },
                });
              }
            }
          }
        }}
        displayEventTime={true}
        events={filteredData}
      />
    );
  }
}

export default Calendarall;
