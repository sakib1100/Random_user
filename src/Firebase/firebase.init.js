// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4fHwl0-GVHPBuXl2_2DifpHA6TD1kKQk",
  authDomain: "my-app-24c81.firebaseapp.com",
  projectId: "my-app-24c81",
  storageBucket: "my-app-24c81.appspot.com",
  messagingSenderId: "345264273005",
  appId: "1:345264273005:web:c1ce52caf7abcb6f61b164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;