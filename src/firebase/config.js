

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYivtjvup9mjKUE4i4yT7c-033Ki4vMqE",
  authDomain: "reactcoder-70265.firebaseapp.com",
  projectId: "reactcoder-70265",
  storageBucket: "reactcoder-70265.appspot.com",
  messagingSenderId: "588689756828",
  appId: "1:588689756828:web:d6307f4c1ab1e576f95359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)