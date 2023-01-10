
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

  import firebase from "firebase/compat/app";
  import "firebase/compat/auth";
  import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrJDH6CF2YC-HWBcZqpbqJhx1OprVi_C0",
  authDomain: "clone-776df.firebaseapp.com",
  projectId: "clone-776df",
  storageBucket: "clone-776df.appspot.com",
  messagingSenderId: "780275321811",
  appId: "1:780275321811:web:e8a02c71f7f9976194bd26",
  measurementId: "G-PY5920Q05Q",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };


const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth , db };