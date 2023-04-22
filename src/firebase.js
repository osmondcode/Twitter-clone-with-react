// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCyXqZ4wGxWov0hy_HWCG2GgqP8f9oSBOM",
  authDomain: "tron-chat-e9d61.firebaseapp.com",
  projectId: "tron-chat-e9d61",
  storageBucket: "tron-chat-e9d61.appspot.com",
  messagingSenderId: "471284236375",
  appId: "1:471284236375:web:d622010b984fc6bb926312"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export default getFirestore();