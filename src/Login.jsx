import "./Styles/login.css";
import { useState } from "react";
import Student from "./Student";
import Lecturer from "./Lecturer";

export default function Login({ refresh }) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <div className="topnav">
        <button className="btn-signin" onClick={() => setIsSignIn(true)}>
          Student
        </button>
        <button className="btn-signup" onClick={() => setIsSignIn(false)}>
          Lecturer
        </button>
      </div>
      {isSignIn ? (
        <Student refresh={refresh} />
      ) : (
        <Lecturer refresh={refresh} />
      )}
    </>
  );
}
