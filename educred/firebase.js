// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCojMt-bNTJfPAgiijPVcJGpdBHkn2JZMk",
  authDomain: "sample-41b32.firebaseapp.com",
  projectId: "sample-41b32",
  storageBucket: "sample-41b32.firebasestorage.app",
  messagingSenderId: "498226922061",
  appId: "1:498226922061:web:54293f6abe5254590e5204",
  measurementId: "G-DX8BEHB3CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);