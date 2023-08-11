import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8JN-4jlUGXis8PC5IOVhPv-zng9lpELw",
  authDomain: "chat-a56cb.firebaseapp.com",
  projectId: "chat-a56cb",
  storageBucket: "chat-a56cb.appspot.com",
  messagingSenderId: "64835702534",
  appId: "1:64835702534:web:2a79bd81fec8a242969887",
  measurementId: "G-JGG2CE4NR8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()