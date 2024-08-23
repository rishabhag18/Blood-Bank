// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQFhc6GXdaIsHp2rrXGgKxw6K56e7vE3k",
  authDomain: "blood-donor-connect-ce661.firebaseapp.com",
  projectId: "blood-donor-connect-ce661",
  storageBucket: "blood-donor-connect-ce661.appspot.com",
  messagingSenderId: "193709646208",
  appId: "1:193709646208:web:e410b0fd6a812fc358e165",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier};