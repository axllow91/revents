import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARoqsjN686bejK6aXhuOnU_tCK0qCkH5A",
  authDomain: "reventsmrn.firebaseapp.com",
  databaseURL: "https://reventsmrn.firebaseio.com",
  projectId: "reventsmrn",
  storageBucket: "reventsmrn.appspot.com",
  messagingSenderId: "835088271052",
  appId: "1:835088271052:web:1dc97e21e245ff62686469",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore(); // initializa firestore

export default firebase;
