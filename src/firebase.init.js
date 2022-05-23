// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeuSGbZECm-qkFQlIFr0Zmok4bpiYrczE",
  authDomain: "car-bro-4747.firebaseapp.com",
  projectId: "car-bro-4747",
  storageBucket: "car-bro-4747.appspot.com",
  messagingSenderId: "332868310433",
  appId: "1:332868310433:web:cf9b23d6f546e7e5c967e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;