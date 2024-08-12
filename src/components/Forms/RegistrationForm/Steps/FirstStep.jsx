import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.css";
import { multiStepContext } from "./StepContext";
import { useContext } from 'react';
export default function FirstStep() {
  const {setStep,userData,setUserData}=useContext(multiStepContext);

  return (
    <div className="container">
        <div className="innerContainer">
      <TextField
        label="First Name"
        margin="normal"
        varient="outlined"
        color="secondary"
      />
      </div>
      <div className="innerContainer">
      <TextField
        label="Last Name"
        margin="normal"
        varient="outlined"
        color="secondary"
      />
      </div>
      <div className="innerContainer">
      <TextField
        label="Contact"
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
      <Button variant="contained" color="primary" onClick={()=>setStep(2)}>
        Next
      </Button>
    </div>
  );
}
