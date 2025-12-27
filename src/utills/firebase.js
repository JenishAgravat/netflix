
export default App
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP0cW9rofiTsTRgo77aNAN-JaB1n3JUHA",
  authDomain: "netflix-c2f3c.firebaseapp.com",
  projectId: "netflix-c2f3c",
  storageBucket: "netflix-c2f3c.firebasestorage.app",
  messagingSenderId: "732962723790",
  appId: "1:732962723790:web:2b273e39c8193d84bbbd9f",
  measurementId: "G-QLTWD06XEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);