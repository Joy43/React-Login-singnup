// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrrTN69axdedHoFOG9ACG_mm69dac-9XA",
  authDomain: "email-password-79ab1.firebaseapp.com",
  projectId: "email-password-79ab1",
  storageBucket: "email-password-79ab1.appspot.com",
  messagingSenderId: "89345578617",
  appId: "1:89345578617:web:f52240c84d17a871a466a8",
  measurementId: "G-J2DP7QDC4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;