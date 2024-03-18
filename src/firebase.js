import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBsdN3Z1CoAJ2ltzYc-WXRqTcOO893LUDM",
  authDomain: "hotstar-clone-a47a9.firebaseapp.com",
  projectId: "hotstar-clone-a47a9",
  storageBucket: "hotstar-clone-a47a9.appspot.com",
  messagingSenderId: "166055072045",
  appId: "1:166055072045:web:19ed5152558fe1b8e943a4",
  measurementId: "G-JKLH0LE0VQ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;