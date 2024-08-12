import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.css";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
export default function Secondtep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="container">
      <div className="innerContainer">
        <TextField
          label="State"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <div className="innerContainer">
        <TextField
          label="Pin Code"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <div className="innerContainer">
        <TextField
          label="Blood Group"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <div className="innerContainer">
        <TextField
          label="Email Address"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <div className="innerContainer">
        <TextField
          label="Gender"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <div className="innerContainer">
        <TextField
          label="Age"
          margin="normal"
          varient="outlined"
          color="secondary"
        />
      </div>
      <Button variant="contained" color="error" onClick={() => setStep(1)}>
        Back
      </Button>
      <span> </span>
      <Button variant="contained" color="primary" onClick={() => setStep(3)}>
        Next
      </Button>
    </div>
  );
}
