import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyDJ8ClD4_FOZGHiehzQh7e-UOGw4sruQII",
  authDomain: "otp-based-verification.firebaseapp.com",
  projectId: "otp-based-verification",
  storageBucket: "otp-based-verification.appspot.com",
  messagingSenderId: "240391384598",
  appId: "1:240391384598:web:494d1b4093453e71524f37",
  measurementId: "G-SYCE54WPRW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
