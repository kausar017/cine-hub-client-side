// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO4x38uiNo8MGaue1FaQuCxBijuJPYMB8",
    authDomain: "b10-a10-bf11c.firebaseapp.com",
    projectId: "b10-a10-bf11c",
    storageBucket: "b10-a10-bf11c.firebasestorage.app",
    messagingSenderId: "180796583786",
    appId: "1:180796583786:web:4173ae1e1621186172bf13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;