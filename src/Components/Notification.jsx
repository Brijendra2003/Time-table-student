import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import "../Styles/Notification.css";

export default function Notification({ type, message }) {
  return (
    <div className="notification">
      <div className="noti-cotainer">
        <Stack sx={{ width: "100%" }} spacing={2}>
          {type == "success" && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              {message}
            </Alert>
          )}
          {type == "info" && (
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              {message}
            </Alert>
          )}
          {type == "warning" && (
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              {message}
            </Alert>
          )}
          {type == "error" && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {message}
            </Alert>
          )}
        </Stack>
      </div>
    </div>
  );
}
