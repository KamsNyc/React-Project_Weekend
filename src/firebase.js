import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCQcMz7_HVAh8IN-9_pGXaQZndwHLZ6-Ek",
    authDomain: "react-redux-project-first.firebaseapp.com",
    projectId: "react-redux-project-first",
    storageBucket: "react-redux-project-first.appspot.com",
    messagingSenderId: "187144360595",
    appId: "1:187144360595:web:f44eaef61c0c2ce701f366",
    measurementId: "G-5HGSWWZEGJ"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = getAuth(firebaseApp);


  export {db, auth}