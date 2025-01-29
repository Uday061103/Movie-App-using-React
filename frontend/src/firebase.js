import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4gDNKi1Oaib1jvNqmM9z2NEScSwRdgts",
  authDomain: "movie-app-4651e.firebaseapp.com",
  projectId: "movie-app-4651e",
  storageBucket: "movie-app-4651e.firebasestorage.app",
  messagingSenderId: "677082334315",
  appId: "1:677082334315:web:2e5d60b36c7b5ef0471d2e",
  measurementId: "G-201EV4R42F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 