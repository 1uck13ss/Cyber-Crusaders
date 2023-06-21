// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYsFJKE-2ynWP1TuUuA_BtFDv159JXOJw",
  authDomain: "cybercrusaders-login-database.firebaseapp.com",
  projectId: "cybercrusaders-login-database",
  storageBucket: "cybercrusaders-login-database.appspot.com",
  messagingSenderId: "646211728895",
  appId: "1:646211728895:web:89b1058df27c90883523ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };