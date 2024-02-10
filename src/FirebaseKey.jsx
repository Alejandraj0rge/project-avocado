// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh6LVwpXsL78JsdxS0Ks2NGRqALxGmWTI",
  authDomain: "alejandra-jorge-portafolio.firebaseapp.com",
  projectId: "alejandra-jorge-portafolio",
  storageBucket: "alejandra-jorge-portafolio.appspot.com",
  messagingSenderId: "797751373675",
  appId: "1:797751373675:web:2c2d92ae78c4d38354662e",
  measurementId: "G-DQK4HGHCW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);