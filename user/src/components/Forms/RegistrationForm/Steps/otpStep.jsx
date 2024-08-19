import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react"
import { auth } from "./firebaseConfig";
import { toast,Toaster } from "react-hot-toast";
import {BsFillShieldLockFill,BsTelephoneFill} from "react-icons/bs";
import {} from 'react-icons/cg';

const verifyUser = () => {
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
                    callback : (response) => {
                        onSignup();
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
                                </>
                                    ):null
                            }
                    </div>
                    )}
            </div>
        </section>
    );
};

export default verifyUser;