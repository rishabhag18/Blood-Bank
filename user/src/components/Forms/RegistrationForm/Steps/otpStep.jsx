import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { toast,Toaster } from "react-hot-toast";
import {BsFillShieldLockFill,BsTelephoneFill} from "react-icons/bs";
import {CgSpinner} from 'react-icons/cg';
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

const VerifyUser = () => {
    const[otp,setOtp] = useState("");
    const[ph,setPh] = useState("");
    const[loading,setLoading] = useState(false);
    const[showOTP,setShowOTP] = useState(false);
    const[user,setUser] = useState(null);

    function onCaptchVerify () {
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier =  new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size : "invisible",
                    callback : (res) => {
                        onSignup();
                        console.log(res);
                    },
                    "expired-callback" : () => {},
                },
                auth
            );
        }
    }

    function onSignup(){
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;
        signInWithPhoneNumber(auth,formatPh,appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sent succesfully");
            }) 
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
            console.log(res);
            setUser(res.user);
            setLoading(false);
        });
    }

    return (
        <section className="flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions = {{duration:4000}}/>
                <div id="recaptcha-container"></div>
                {user ? (
                <h2 className="text-center font-medium text-2xl mb-6">
                    Login Success
                </h2>
                ) : (
                    <div className="w-80 flexflex-col gap-4 rounded-lg p-4">
                        {showOTP ? (
                            <>
                            <div className="bg-white w-fit mx-auto p-4 rouned-full">
                                <BsFillShieldLockFill size={30}/>
                            </div>
                            <label htmlFor="otp" className = "font-bold text-xl text-white text-center">
                                Enter your OTP
                            </label>
                            <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autofocus
                            className="otp-container"></OtpInput>
                            <button onClick={onOTPVerify} className="bg-red-600 w-full flex-gap-1 items-center justify-center py-2.5 text-white rounded">
                                {loading && (
                                    <CgSpinner size={20} className="mt-1 animate-spin"></CgSpinner>
                                )}
                                <span>Verify OTP</span>
                            </button>
                            </>
                        ) : (
                            <>
                                <div className="bg-white text-red-500 w-fit mx-auto p-4 rounded-full">
                                    <BsTelephoneFill size={30}></BsTelephoneFill>
                                </div>
                                <label htmlFor="" className="font-bold text-xl text-white text-center">
                                   Verify Your Phone Number 
                                </label>
                                <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput>
                                <button onClick={onSignup}
                                className="bg-red-600 w-full felx gap-1 items-center justify-center py-2.5 text-white rounded">
                                    {loading && (
                                    <CgSpinner size={20} className="mt-1 animate-spin"></CgSpinner>
                                )}
                                <span>Send code via SMS</span>
                                </button>
                            </>
                        
                        )}
                    </div>
                    )}
            </div>
        </section>
    );
};

export default VerifyUser;