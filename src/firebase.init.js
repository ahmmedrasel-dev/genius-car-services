// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNqBLxHUa-oP32cH2UetRPK-ap9opQSlw",
  authDomain: "genius-car-service-44845.firebaseapp.com",
  projectId: "genius-car-service-44845",
  storageBucket: "genius-car-service-44845.appspot.com",
  messagingSenderId: "303420509728",
  appId: "1:303420509728:web:4d3ebffa627d89d0303645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;