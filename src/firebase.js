// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvW-8qAawjSCOHFi0pOBLyjci-S5eJxYE",
  authDomain: "restaurats.firebaseapp.com",
  projectId: "restaurats",
  storageBucket: "restaurats.appspot.com",
  messagingSenderId: "274291152649",
  appId: "1:274291152649:web:1b0d20d7bdf09fecdee5d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)