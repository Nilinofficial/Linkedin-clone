import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCA7qQ9mMV9ifvEFz3QoWrMVnuyorAlE7s",
    authDomain: "linked-in-8ebde.firebaseapp.com",
    projectId: "linked-in-8ebde",
    storageBucket: "linked-in-8ebde.appspot.com",
    messagingSenderId: "672881189025",
    appId: "1:672881189025:web:29721dd2d65bf5d413d0e0",
    measurementId: "G-EL9MG1X1FK"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}