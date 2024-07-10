// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3lAHxFXZ1_fbyUlIb3x1oR1SAuN7A1FI",
  authDomain: "email-password-auth-50c1c.firebaseapp.com",
  projectId: "email-password-auth-50c1c",
  storageBucket: "email-password-auth-50c1c.appspot.com",
  messagingSenderId: "52971854924",
  appId: "1:52971854924:web:148846146ac8e07f1ca8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;