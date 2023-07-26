// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT1jgEsJjgsIl3AUR0L1_nZBTDqk6jOiw",
  authDomain: "miniblog-3b735.firebaseapp.com",
  projectId: "miniblog-3b735",
  storageBucket: "miniblog-3b735.appspot.com",
  messagingSenderId: "632093163500",
  appId: "1:632093163500:web:38ba756a4e9947293d0ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};