import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import axiosInstance from "../HelperFiles/axiosInstance";
import Loading from "../Components/loading";
import HomeCard from "../Components/HomeCard";
import currentTime from "../HelperFiles/currentTime";
import Image from "../Components/image";
import "../Styles/Home.css";
import Breaks from "../HelperFiles/Breaks";
export default function Home() {
  let [loading, setLoading] = useState(null);
  const [isLecturer, setIsLecturer] = useState(false);
  const [image, setimage] = useState(false);
  const [boxData, setBoxData] = useState({});
  // let Monday, Tuesday, Wednesday, Thursday, Friday, Saturday;
  const studentData = localStorage.getItem("Student");
  const lecturerData = localStorage.getItem("Lecturer");
  const params = studentData
    ? JSON.parse(studentData)
    : JSON.parse(lecturerData);
  // console.log("exicution");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayName = days[today.getDay()];
  useEffect(() => {
    if (Breaks()) setimage(<Image url={Breaks()} />);
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
      setIsLecturer(true);

      setLoading(<Loading />);
      axiosInstance
        .get("/lecturerTT", { params })
        .then((res) => {
          setLoading(null);
          const datas = res.data;
          const monday = datas.filter((data) => data.day == "Monday");
          const tuesday = datas.filter((data) => data.day == "Tuesday");
          const wednesday = datas.filter((data) => data.day == "Wednesday");
          const thursday = datas.filter((data) => data.day == "Thursday");
          const friday = datas.filter((data) => data.day == "Friday");
          const saturday = datas.filter((data) => data.day == "Saturday");
          // console.log(monday);

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

  const timeSlote = [
    {
      start: "09:30",
      end: "10:25",
    },
    {
      start: "10:26",
      end: "11:20",
    },
    {
      start: "11:21",
      end: "12:15",
    },
    {
      start: "13:00",
      end: "13:55",
    },
    {
      start: "13:56",
      end: "14:50",
    },
    {
      start: "14:51",
      end: "15:45",
    },
    {
      start: "15:46",
      end: "16:40",
    },
  ];

  return (
    <>
      <Navigation home={true} />
      <div className="home-container">
        {loading}
        {image}
        {dayName != "Sunday" ? (
          boxData[dayName] &&
          [...Array(7)].map((_, index) => (
            <HomeCard
              key={index}
              datas={boxData[dayName][index]}
              student={studentData}
              current={currentTime(timeSlote[index])}
            />
          ))
        ) : (
          <>
            <h1 className="heading-home">Its Holiday!</h1>
            <img
              className="homepage-img"
              src="https://bakend.up.railway.app/assets/Holiday.png"
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
}
