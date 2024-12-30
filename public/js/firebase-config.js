// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKtP4c_PA9qKlvbxg_qckPtJvC9j_XTjU",
  authDomain: "magic-a48bf.firebaseapp.com",
  projectId: "magic-a48bf",
  storageBucket: "magic-a48bf.firebasestorage.app",
  messagingSenderId: "762676567252",
  appId: "1:762676567252:web:5841cf495ede6fcea8ef41",
  measurementId: "G-KWWQDXX9YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics }; 
