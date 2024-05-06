// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqQZhiDLgRM59HkgkMVmFEUmw3jZNxoXM",
  authDomain: "xhayn-skitchen.firebaseapp.com",
  projectId: "xhayn-skitchen",
  storageBucket: "xhayn-skitchen.appspot.com",
  messagingSenderId: "978785175322",
  appId: "1:978785175322:web:8aacfed1b417895ef78ea3",
  measurementId: "G-VHGXKJ8155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);