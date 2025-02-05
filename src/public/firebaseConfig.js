import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlxZOw9jn0t7iivfFpgeGN-E0oL3Culok",
  authDomain: "app-meet-1d5c1.firebaseapp.com",
  projectId: "app-meet-1d5c1",
  storageBucket: "app-meet-1d5c1.firebasestorage.app",
  messagingSenderId: "541182852319",
  appId: "1:541182852319:web:2aa189cf06f8be910d7d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInWithEmailAndPassword };