import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import axiosInstance from "../HelperFiles/axiosInstance";
import Loading from "../Components/loading";
import HomeCard from "../Components/HomeCard";
import "../Styles/Home.css";
export default function Home() {
  let [loading, setLoading] = useState(null);
  const [isLecturer, setIsLecturer] = useState(false);
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
      <Navigation home={true} />
      <div className="home-container">
        {loading}
        {dayName != "Sunday" ? (
          boxData[dayName] &&
          [...Array(7)].map((_, index) => (
            <HomeCard
              key={index}
              datas={boxData[dayName][index]}
              student={studentData}
            />
          ))
        ) : (
          <>
            <h1 className="heading-home">Its Holiday!</h1>
            <img
              className="homepage-img"
              src="/Time-table-student/public/Holiday.png"
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
}
