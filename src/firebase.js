// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy75ta5Jwmop1NvxivSLR612-6AybJKO8",
  authDomain: "parkhub-c5a48.firebaseapp.com",
  projectId: "parkhub-c5a48",
  storageBucket: "parkhub-c5a48.appspot.com",
  messagingSenderId: "1075591938099",
  appId: "1:1075591938099:web:bd84cd2414a1c7f5082346",
  measurementId: "G-LSG5VZ8HRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);