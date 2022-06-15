// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import {firebase } from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXSzFhlr0S9QBelX_fj_LY3NsnnNXytX0",
  authDomain: "crud-react1-f14ef.firebaseapp.com",
  projectId: "crud-react1-f14ef",
  storageBucket: "crud-react1-f14ef.appspot.com",
  messagingSenderId: "981873053656",
  appId: "1:981873053656:web:e7408d41e0fdbf2f1a2cad",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

// export default firebase;
export const db = getDatabase(app);


