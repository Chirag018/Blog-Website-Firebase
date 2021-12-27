// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIAhluHVhzn1FaKKYyOncj1m_lkpLlOsk",
    authDomain: "blogproject-7220b.firebaseapp.com",
    projectId: "blogproject-7220b",
    storageBucket: "blogproject-7220b.appspot.com",
    messagingSenderId: "194314200740",
    appId: "1:194314200740:web:4d1c3da1d7300ad6502831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();