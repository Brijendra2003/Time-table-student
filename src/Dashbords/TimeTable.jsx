import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import TtBox from "../Components/TtBox";
import "../Styles/TimeTable.css";
import axiosInstance from "../HelperFiles/axiosInstance";
import Loading from "../Components/loading";
export default function TimeTable() {
  let [loading, setLoading] = useState(null);
  const [isLecturer, setIsLecturer] = useState(false);
  const [boxData, setBoxData] = useState({});
  // let Monday, Tuesday, Wednesday, Thursday, Friday, Saturday;
  const studentData = localStorage.getItem("Student");
  const lecturerData = localStorage.getItem("Lecturer");
  const params = studentData
    ? JSON.parse(studentData)
    : JSON.parse(lecturerData);

  useEffect(() => {
    if (studentData) {
      setLoading(<Loading />);
      axiosInstance
        .get("/studentTT", { params })
        .then((res) => {
          setLoading(null);
          // console.log(res.data);
          const datas = res.data;
          const monday = datas.filter((data) => data.day == "Monday");
          const tuesday = datas.filter((data) => data.day == "Tuesday");
          const wednesday = datas.filter((data) => data.day == "Wednesday");
          const thursday = datas.filter((data) => data.day == "Thursday");
          const friday = datas.filter((data) => data.day == "Friday");
          const saturday = datas.filter((data) => data.day == "Saturday");
          // console.log(monday);
          // console.log(tuesday);

          setBoxData({
            Monday: monday,
            Tuesday: tuesday,
            Wednesday: wednesday,
            Thursday: thursday,
            Friday: friday,
            Saturday: saturday,
          });
        })

        .catch((err) => {
          setLoading(null);
          console.log(err.message);
        });
    } else {
      // console.log("inside else", params);
      setIsLecturer(true);

      setLoading(<Loading />);
      axiosInstance
        .get("/lecturerTT", { params })
        .then((res) => {
          setLoading(null);
          // console.log(res.data);
          const datas = res.data;
          const monday = datas.filter((data) => data.day == "Monday");
          const tuesday = datas.filter((data) => data.day == "Tuesday");
          const wednesday = datas.filter((data) => data.day == "Wednesday");
          const thursday = datas.filter((data) => data.day == "Thursday");
          const friday = datas.filter((data) => data.day == "Friday");
          const saturday = datas.filter((data) => data.day == "Saturday");
          // console.log(monday);
          // console.log(tuesday);

          setBoxData({
            Monday: monday,
            Tuesday: tuesday,
            Wednesday: wednesday,
            Thursday: thursday,
            Friday: friday,
            Saturday: saturday,
          });
        })

        .catch((err) => {
          setLoading(null);
          console.log(err.message);
        });
    } // Prevents unnecessary API call
  }, []);

  return (
    <>
      <Navigation dasbord={true} />
      {loading}
      <div className="parent-container" id="timet">
        <div className="day-time-cotainer">
          <div className="box-tt" id="dt">
            <div className="day">Day</div>
            <div className="time">Time</div>
          </div>
          <div className="box-tt times" id="lec1-time">
            9:30 am <br />
            to <br />
            10:25 am
          </div>
          <div className="box-tt times" id="lec2-time">
            10:25 am <br />
            to <br />
            11:20 am
          </div>
          <div className="box-tt times" id="lec3-time">
            11:20 am <br />
            to <br />
            12:15 pm
          </div>
          <div className="box-tt times" id="lec4-time">
            01:00 pm <br />
            to <br />
            01:55 pm
          </div>
          <div className="box-tt times" id="lec5-time">
            01:55 pm <br />
            to <br />
            02:50 pm
          </div>
          <div className="box-tt times" id="lec6-time">
            02:50 pm <br />
            to <br />
            03:45 pm
          </div>
          <div className="box-tt times" id="lec6-time">
            03:45 pm <br />
            to <br />
            04:40 pm
          </div>
        </div>
        <div className="container">
          <div className="box-tt days">Monday</div>
          <div className="box-tt days">Tuesday</div>
          <div className="box-tt days">Wednesday</div>
          <div className="box-tt days">Thursday</div>
          <div className="box-tt days">Friday</div>
          <div className="box-tt days">Saturday</div>
          <div className="ttbox-grid">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map(
              (day) =>
                boxData[day] &&
                [...Array(7)].map((_, index) => (
                  <TtBox
                    key={`${day}-${index}`}
                    isLecturer={isLecturer}
                    boxdata={boxData[day][index] || null}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
