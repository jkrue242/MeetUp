import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJkOdIg10YpFH4_ppZXgflsqi21JlT5u8",
  authDomain: "meetup-2d76d.firebaseapp.com",
  databaseURL: "https://meetup-2d76d-default-rtdb.firebaseio.com",
  projectId: "meetup-2d76d",
  storageBucket: "meetup-2d76d.appspot.com",
  messagingSenderId: "603869233490",
  appId: "1:603869233490:web:499df78838275913d1ba8b",
  measurementId: "G-2K96PRHZGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

