import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-store-app-5a334.firebaseapp.com",
  projectId: "online-store-app-5a334",
  storageBucket: "online-store-app-5a334.appspot.com",
  messagingSenderId: "343011609399",
  appId: "1:343011609399:web:ac87798f3c1c475b44a8b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
