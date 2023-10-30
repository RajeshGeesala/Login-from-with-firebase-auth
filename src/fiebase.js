// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsv_HSyWZeriY-s5xwdhcIOMkPonT6X_E",
  authDomain: "auth-ab1f7.firebaseapp.com",
  projectId: "auth-ab1f7",
  storageBucket: "auth-ab1f7.appspot.com",
  messagingSenderId: "791546942763",
  appId: "1:791546942763:web:247defb9f7a0ac9d41e16e",
  measurementId: "G-YCXCVH6ZPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
   export const auth = getAuth()
export default app  ;