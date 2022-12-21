// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Ebw9CQh212cDHbMUjEaJmh1dyKATngs",
  authDomain: "house-marketplace-app-5ff46.firebaseapp.com",
  projectId: "house-marketplace-app-5ff46",
  storageBucket: "house-marketplace-app-5ff46.appspot.com",
  messagingSenderId: "640530032374",
  appId: "1:640530032374:web:025ac7b69a23abc7b76ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()