// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "final-pr-ea139.firebaseapp.com",
  projectId: "final-pr-ea139",
  storageBucket: "final-pr-ea139.appspot.com",
  messagingSenderId: "409965350109",
  appId: "1:409965350109:web:a3288319805d36eadb1f34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };