// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_w6bjT9jIy-xP93BRNyh2QPDEwmJ6WLg",
  authDomain: "medez-3d1fd.firebaseapp.com",
  projectId: "medez-3d1fd",
  storageBucket: "medez-3d1fd.appspot.com",
  messagingSenderId: "361248613519",
  appId: "1:361248613519:web:802f4baea6feb912333cfa",
  measurementId: "G-XGVTMXGPY1"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);