// src/components/PhoneAuth.js
import React, { useState,useRef } from 'react';
//import firebase from "./firebase";

const Authentication = () => {
    const [phoneNumber,setPhoneNumber] = useState('');
    const [otp,setOtp]=useState("");
    const [verificationId, setVerificationId] = useState('');
    const recaptchaRef= useRef(null);

    const handleSendOtp = ()=>{
        if(recaptchaRef.current){
            recaptchaRef.current.innerHTML='<div id="recaptcha-container"></div>';
        }
        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log('reCAPTCHA solved:', response);
            },
            'expired-callback': () => {
              // Handle expired reCAPTCHA.
              console.log('reCAPTCHA expired, please solve it again.');
            }
          });
        firebase.auth().signInWithPhoneNumber(phoneNumber,recaptchaVerifier)
        .then(confirmationResult=>{
            setVerificationId(confirmationResult.verificationId);
        })
        .catch(error=>{
            console.log("Error sending OTP ", error)
        })
    }

    
    return (<>
    <div>
        <h1>OTP VERIFACTION</h1>
        <div id="recaptcha-container"></div>
        <input type="tel" placeholder='+919876543211' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <button onClick={handleSendOtp}>Send OTP</button>
    </div>
    </>)
}
  
export default Authentication;
