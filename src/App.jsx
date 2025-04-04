import Login from "./Login.jsx";
import "./App.css";
import Loading from "./Components/loading";
import { Routes, Route } from "react-router-dom";
import Home from "./Dashbords/Home.jsx";
import TimeTable from "./Dashbords/TimeTable.jsx";
import Profile from "./Dashbords/Profile.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isLogedin, setISLogedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("Lecturer") || localStorage.getItem("Student")) {
      setISLogedIn(true);
    }
  }, []);

  let refresh = () => {
    setISLogedIn(true);
  };
  return (
    <>
      {isLogedin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TimeTable" element={<TimeTable />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      ) : (
        <Login refresh={refresh} />
      )}
    </>
  );
}

export default App;
