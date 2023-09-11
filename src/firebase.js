// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getAuth} from "../node_modules/firebase/auth";
import { getFirestore } from "../node_modules/firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQcMz7_HVAh8IN-9_pGXaQZndwHLZ6-Ek",
  authDomain: "react-redux-project-first.firebaseapp.com",
  projectId: "react-redux-project-first",
  storageBucket: "react-redux-project-first.appspot.com",
  messagingSenderId: "187144360595",
  appId: "1:187144360595:web:f44eaef61c0c2ce701f366",
  measurementId: "G-5HGSWWZEGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
