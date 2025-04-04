import Notification from "./Components/Notification";
import axiosInstance from "./HelperFiles/axiosInstance";

import "./Styles/signin.css";
import Loading from "./Components/loading";
import { useState, useEffect } from "react";

export default function Lecturer({ refresh }) {
  const [formdata, setFormData] = useState({});
  let [loading, setLoading] = useState(null);
  const [notify, setNotify] = useState(null);
  const setValue = (event) => {
    const { name, value } = event.target;

    setFormData(() => ({
      [name]: value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (formdata.name == null) {
      setLoading(<Loading />);
      axiosInstance
        .get("/Lecturer", {
          params: { id: formdata.Id },
        })
        .then((res) => {
          setLoading(null);
          console.log(res);
          setFormData((prevFormData) => ({
            ...prevFormData,
            name: res.data[0].name,
          }));
        })
        .catch((err) => {
          setLoading(null);
          if (err.response) {
            let msg = err.response.data?.message || "Something went wrong!";
            setNotify(<Notification type="error" message={msg} />);
            setTimeout(() => {
              setNotify(null);
            }, 3000);
          } else {
            setNotify(
              <Notification
                type="error"
                message="Server not responding. Please try again later."
              />
            );
            setTimeout(() => {
              setNotify(null);
            }, 3000);
          }
        });
    } else {
      // console.log(formdata);
      localStorage.clear();
      localStorage.setItem("Lecturer", JSON.stringify(formdata));
      refresh();
      // console.log(localStorage.getItem("lecturer"));
    }
  };

  return (
    <>
      {loading}
      {notify}
      <div className="box">
        <h2>Lecturer</h2>
        <p>Enter your ID</p>
        <form className="student-loginform" onSubmit={submitForm}>
          <div className="inputBox">
            <input
              type="text"
              name="Id"
              required
              onChange={setValue}
              value={formdata.Id || ""}
            />
            <label>User Id</label>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              disabled
              onChange={setValue}
              value={formdata.name || ""}
            />
            <label>Name</label>
          </div>
          <input
            type="submit"
            name="sign-in"
            value={formdata.name ? "Submite" : "continue"}
          />
        </form>
      </div>
    </>
  );
}
