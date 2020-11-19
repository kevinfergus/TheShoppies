
import firebase from "firebase/app";
import "firebase/firestore"
const config = {
    apiKey: "AIzaSyBUKU9LrYl27C4fD4SwdVFbUFm7_B6rDXo",
    authDomain: "yearone-api-design.firebaseapp.com",
    databaseURL: "https://yearone-api-design.firebaseio.com",
    projectId: "yearone-api-design",
    storageBucket: "yearone-api-design.appspot.com",
    messagingSenderId: "664680206962",
    appId: "1:664680206962:web:a61e2c7facabc98862a8eb",
    measurementId: "G-54HLH7JWYB"
  };
  

export const fire = firebase.initializeApp(config);

export const db = fire.firestore();