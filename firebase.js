// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDViBJmQtF51ZdJLKWI1l_BDqhfeoXht5M",
  authDomain: "dhousemap-cb36d.firebaseapp.com",
  projectId: "dhousemap-cb36d",
  storageBucket: "dhousemap-cb36d.appspot.com",
  messagingSenderId: "48463697417",
  appId: "1:48463697417:web:63ec49d106fedaf55b4ad8",
};

// Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };
