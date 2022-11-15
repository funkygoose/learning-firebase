// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebse/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVN3qn5ZSm1WnE-Q79YeHTNEbk7tcumiQ",
  authDomain: "fir-practice-80e64.firebaseapp.com",
  projectId: "fir-practice-80e64",
  storageBucket: "fir-practice-80e64.appspot.com",
  messagingSenderId: "21570544841",
  appId: "1:21570544841:web:ae440ce8686fe7d0251918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();