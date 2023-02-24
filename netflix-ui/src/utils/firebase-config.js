// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0EfS__mF905jz6tm-6PHJr9ma4DQnsus",
    authDomain: "react-netflix-clone-ccec6.firebaseapp.com",
    projectId: "react-netflix-clone-ccec6",
    storageBucket: "react-netflix-clone-ccec6.appspot.com",
    messagingSenderId: "517179126729",
    appId: "1:517179126729:web:1c8eae8d9addc8b529ee18",
    measurementId: "G-XSC91RLCXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);