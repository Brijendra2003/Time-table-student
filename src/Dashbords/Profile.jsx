import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Login from "../Login";
import Student from "../Student";
import Lecturer from "../Lecturer";

export default function Profile() {
  const studentData = localStorage.getItem("Student");
  const lecturerData = localStorage.getItem("Lecturer");
  const params = studentData
    ? JSON.parse(studentData)
    : JSON.parse(lecturerData);
  const [isStudent, setIsStudent] = useState(studentData);

  return (
    <>
      <Navigation profile={true} />
      {isStudent ? <Student /> : <Lecturer />}
    </>
  );
}
