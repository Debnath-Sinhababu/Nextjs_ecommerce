// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlS9x8uBAmtW6Wcw3TRqVsN80R_0aeVkg",
  authDomain: "ecommerce-8a1b9.firebaseapp.com",
  projectId: "ecommerce-8a1b9",
  storageBucket: "ecommerce-8a1b9.appspot.com",
  messagingSenderId: "667707294828",
  appId: "1:667707294828:web:d67a43b201532c6fe68449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app);
export {db}
export default auth