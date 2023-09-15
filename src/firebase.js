// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getFirestore, collection, addDoc } from '../node_modules/firebase/firestore';
import { getAuth } from '../node_modules/firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiuU5M-ZX1_gxw5gVyU1_c0GS5Yhi8pLM",
  authDomain: "react-test-4d622.firebaseapp.com",
  projectId: "react-test-4d622",
  storageBucket: "react-test-4d622.appspot.com",
  messagingSenderId: "669582751561",
  appId: "1:669582751561:web:e621cd98997cf8e7b90c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth}