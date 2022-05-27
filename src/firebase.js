import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBMkjuCcNennBeD9Yjy0w9BoA_5rge_YSg",
  authDomain: "clone-f3672.firebaseapp.com",
  projectId: "clone-f3672",
  storageBucket: "clone-f3672.appspot.com",
  messagingSenderId: "644975134448",
  appId: "1:644975134448:web:adc19b5a835db5d4492435",
  measurementId: "G-FL3SQ8L75X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider()
export  {db,auth,provider};
