import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDsqi5UglXGEgNttglqzyzc0yEuyG31-Yo",
    authDomain: "markdown-notes-1341d.firebaseapp.com",
    projectId: "markdown-notes-1341d",
    storageBucket: "markdown-notes-1341d.appspot.com",
    messagingSenderId: "904301804145",
    appId: "1:904301804145:web:17de37d4e957401f7df9d0",
    measurementId: "G-GJ758CJ6T5"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
