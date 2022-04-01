// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0bB_kYQIWMQTX1nH6OgSe5PPFJtRgEo",
  authDomain: "ghar-naksha.firebaseapp.com",
  projectId: "ghar-naksha",
  storageBucket: "ghar-naksha.appspot.com",
  messagingSenderId: "996620889823",
  appId: "1:996620889823:web:8ce94d7c25335c84ed036a",
  measurementId: "G-WZM014P472",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
