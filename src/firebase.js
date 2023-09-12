import firebase from '../node_modules/firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyCQcMz7_HVAh8IN-9_pGXaQZndwHLZ6-Ek",
    authDomain: "react-redux-project-first.firebaseapp.com",
    projectId: "react-redux-project-first",
    storageBucket: "react-redux-project-first.appspot.com",
    messagingSenderId: "187144360595",
    appId: "1:187144360595:web:f44eaef61c0c2ce701f366",
    measurementId: "G-5HGSWWZEGJ"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  const auth = firebase.auth();

  export {db, auth}
