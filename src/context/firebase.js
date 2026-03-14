import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2hWq5DcHFxdjLvJzWFnCu0-uOi3wxybY",
  authDomain: "floral-80837.firebaseapp.com",
  projectId: "floral-80837",
  storageBucket: "floral-80837.firebasestorage.app",
  messagingSenderId: "456423646536",
  appId: "1:456423646536:web:ca1e56b11f4d8202813f7d",
  measurementId: "G-F2GVKBGSEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
