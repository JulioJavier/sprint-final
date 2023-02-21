import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvW-8qAawjSCOHFi0pOBLyjci-S5eJxYE",
  authDomain: "restaurats.firebaseapp.com",
  projectId: "restaurats",
  storageBucket: "restaurats.appspot.com",
  messagingSenderId: "274291152649",
  appId: "1:274291152649:web:1b0d20d7bdf09fecdee5d8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
