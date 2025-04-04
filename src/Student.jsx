import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "./HelperFiles/axiosInstance";
import Notification from "./Components/Notification";

import "./Styles/Student.css";
import { useEffect, useState } from "react";
import Loading from "./Components/loading";
// import { StudentOptions } from "./Components/Options";

export default function Student({ refresh }) {
  const [formdata, setFormData] = useState({});
  let [loading, setLoading] = useState(null);
  let [options, setOptions] = useState();
  let [opyObj, setopyObj] = useState({});

  useEffect(() => {
    const getOptions = async () => {
      setLoading(<Loading />);
      try {
        let opt = await axiosInstance.get("/StudentLogin");
        setOptions(opt.data); // Update options state
        setLoading(null);
        // Ensure filtering is done on the fetched data
        setopyObj((opyObj) => ({
          ...opyObj,
          branch: opt.data.filter(
            (option, index, self) =>
              index === self.findIndex((u) => u.branch === option.branch)
          ),
        }));
        // console.log(options);
      } catch (e) {
        setLoading(null);

        console.log(e);
      }
    };

    getOptions();
  }, []);

  const setValue = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    let newOptions = options.filter((option, index) => option[name] == value);
    if (name === "branch") {
      setopyObj((opyObj) => ({
        ...opyObj,
        semester: newOptions.filter(
          (option, index, self) =>
            index === self.findIndex((u) => u.semester === option.semester)
        ),
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        semester: null,
        division: null,
        batch: null,
      }));
      // console.log(newOptions);
    } else if (name == "semester") {
      setopyObj((opyObj) => ({
        ...opyObj,
        division: newOptions.filter(
          (option, index, self) =>
            index === self.findIndex((u) => u.division === option.division)
        ),
      }));
      setFormData((prevFormData) => ({
        ...prevFormData,
        division: null,
        batch: null,
      }));
    } else if (name == "division") {
      setopyObj((opyObj) => ({
        ...opyObj,
        batch: newOptions.filter(
          (option, index, self) =>
            index === self.findIndex((u) => u.batch === option.batch)
        ),
      }));
      setFormData((prevFormData) => ({
        ...prevFormData,
        batch: null,
      }));
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem("Student", JSON.stringify(formdata));
    refresh();
    // console.log(localStorage.getItem("Student"));
  };

  return (
    <>
      {loading}
      <div className="box">
        <h2>Student</h2>
        <p>Select Your details!</p>
        <form className="student-loginform" onSubmit={submitForm}>
          <div className="inputBox">
            <select
              className="input"
              name="branch"
              value={formdata.branch || ""}
              onChange={setValue}
              id=""
            >
              <option value="null"></option>
              {opyObj.branch?.map((option, index) => (
                <option key={index} value={option.branch}>
                  {option.branch}
                </option>
              ))}
            </select>
            <label>Branch</label>
          </div>

          <div className="inputBox">
            <select
              className="input"
              name="semester"
              value={formdata.semester || ""}
              disabled={formdata.branch == null}
              onChange={setValue}
              id=""
            >
              <option value="null"></option>
              {opyObj.semester?.map((option, index) => (
                <option key={index} value={option.semester}>
                  {option.semester}
                </option>
              ))}
            </select>
            <label>Semester</label>
          </div>
          <div className="inputBox">
            <select
              className="input"
              name="division"
              disabled={formdata.semester == null}
              value={formdata.division || ""}
              onChange={setValue}
              id=""
            >
              <option value="null"></option>
              {opyObj.division?.map((option, index) => (
                <option key={index} value={option.division}>
                  {option.division}
                </option>
              ))}
            </select>
            <label>Division</label>
          </div>
          <div className="inputBox">
            <select
              className="input"
              name="batch"
              value={formdata.batch || ""}
              disabled={formdata.division == null}
              onChange={setValue}
              id=""
            >
              <option value="null"></option>
              {opyObj.batch?.map((option, index) => (
                <option key={index} value={option.batch}>
                  {option.batch}
                </option>
              ))}
            </select>
            <label>Batch</label>
          </div>

          <input type="submit" name="sign-in" value="Sign In" />
        </form>
      </div>
    </>
  );
}
// sem
// div
// batch
