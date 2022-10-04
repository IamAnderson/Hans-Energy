import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB970jgQOB7d5r2W76FWcvXZCcznkwjkw4",
    authDomain: "geoleum-72788.firebaseapp.com",
    projectId: "geoleum-72788",
    storageBucket: "geoleum-72788.appspot.com",
    messagingSenderId: "250423369230",
    appId: "1:250423369230:web:c43366ec6c47c4c3b7665f",
    measurementId: "G-C8R4DEW99Q"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)