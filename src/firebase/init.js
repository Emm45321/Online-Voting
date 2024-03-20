// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzOFcZoNuNr0MxTe96gR9U_m4oWRwlTA0",
  authDomain: "election-db.firebaseapp.com",
  projectId: "election-db",
  storageBucket: "election-db.appspot.com",
  messagingSenderId: "141875297124",
  appId: "1:141875297124:web:0637838a3617344ed6d871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
