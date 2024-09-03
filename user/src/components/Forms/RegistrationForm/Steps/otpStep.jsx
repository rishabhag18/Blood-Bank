import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { toast, Toaster } from "react-hot-toast";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from 'react-icons/cg';
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const VerifyUser = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    // const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);

    function onCaptchVerify() {
        console.log(auth)
        if(!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        console.log(response);
                        onSignup();
                    },
                    "expired-callback": () => {
                        toast.error("reCAPTCHA expired. Please try again.");
                    },
                },
            );
            window.recaptchaVerifier.render().then((widgetId) => {
                window.recaptchaWidgetId = widgetId;
            })
                .catch((error) => {
                    console.error("Error initializing reCAPTCHA:", error);
                    toast.error("Failed to initialize reCAPTCHA.");
                });
        }

    }

    const onSignup = async () => {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        if(!appVerifier) return toast.error("")
        // const appVerifier = window.recaptchaVerifier;
        // console.log(auth);

        const formatPh = "+" + ph;
        console.log(auth);
        console.log(formatPh);
        console.log(appVerifier);
        try {
            const result = await signInWithPhoneNumber(auth, formatPh, appVerifier);
            console.log(result)
            setConfirmationResult(result);
            setLoading(false);
            setShowOTP(true);
            toast.success("OTP sent successfully");
        } catch (error) {
            grecaptcha.reset(window.recaptchaWidgetId);

            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });
            console.error("Error sending OTP:", error);
            toast.error("Failed to send OTP. Please try again.");
            setLoading(false);
        }
    };

    const onOTPVerify = async () => {
        setLoading(true);
        if (!confirmationResult) {
            toast.error("No OTP sent. Please request an OTP first.");
            setLoading(false);
            return;
        }

        try {
            const res = await confirmationResult.confirm(otp);
            setUser(res.user);
            toast.success("OTP verified successfully");
            setLoading(false);
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error("Failed to verify OTP. Please try again.");
            setLoading(false);
        }
    };

    return (
        <section className="flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {user ? (
                    <h2 className="text-center font-medium text-2xl mb-6">
                        Login Success
                    </h2>
                ) : (
                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                        {showOTP ? (
                            <>
                                <div className="bg-white w-fit mx-auto p-4 rounded-full">
                                    <BsFillShieldLockFill size={30} />
                                </div>
                                <label
                                    htmlFor="otp"
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    separator={<span>-</span>}
                                    inputStyle="otp-input"
                                    shouldAutoFocus
                                    isInputNum
                                />
                                <button
                                    onClick={onOTPVerify}
                                    className="bg-red-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Verify OTP</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="bg-white text-red-500 w-fit mx-auto p-4 rounded-full">
                                    <BsTelephoneFill size={30} />
                                </div>
                                <label
                                    htmlFor=""
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Verify Your Phone Number
                                </label>
                                <PhoneInput
                                    country={"in"}
                                    value={ph}
                                    onChange={setPh}
                                    inputStyle={{ width: "100%" }}
                                />
                                <button
                                    onClick={onSignup}
                                    className="bg-red-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Send code via SMS</span>
                                </button>
                                {/* <div id="recaptcha"></div> */}
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default VerifyUser;

