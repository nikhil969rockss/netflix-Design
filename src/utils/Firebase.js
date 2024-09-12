// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYqo0W3xYeubAGsKN_QF6u9pfl0WttEQg",
  authDomain: "netflix-gpt-aa41e.firebaseapp.com",
  projectId: "netflix-gpt-aa41e",
  storageBucket: "netflix-gpt-aa41e.appspot.com",
  messagingSenderId: "1060480569415",
  appId: "1:1060480569415:web:565d31be2f579053592162",
  measurementId: "G-XS21T5EVD2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);