// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tpbFfmJ-3maxTegMfXVQ1K2CwiFIL0Y",
  authDomain: "factor-tierra.firebaseapp.com",
  projectId: "factor-tierra",
  storageBucket: "factor-tierra.appspot.com",
  messagingSenderId: "468716091904",
  appId: "1:468716091904:web:92009aeef223ffa4f0b6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)