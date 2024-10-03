// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl6h3PsvUz_gJq-IiYxjlwPo13YgaseOY",
    authDomain: "financely-rec-51912.firebaseapp.com",
    projectId: "financely-rec-51912",
    storageBucket: "financely-rec-51912.appspot.com",
    messagingSenderId: "466158174380",
    appId: "1:466158174380:web:dc910c9fd860b02dd55f09",
    measurementId: "G-8PSPQG5HE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
