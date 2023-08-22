// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3f8uhPUsH7JG-vnWlKHumjp-ZyrIvV_M",
  authDomain: "fir-front-end-8c6d1.firebaseapp.com",
  projectId: "fir-front-end-8c6d1",
  storageBucket: "fir-front-end-8c6d1.appspot.com",
  messagingSenderId: "638413149054",
  appId: "1:638413149054:web:f05ab5234aa84058a3192f",
  measurementId: "G-MWMG1CMXHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()