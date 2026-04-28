import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu config
const firebaseConfig = {
  apiKey: "AIzaSyAUIYpYNUOflr6bEtYxshHwlhKZ_bM3G2k",
  authDomain: "ticketuc-9ceed.firebaseapp.com",
  projectId: "ticketuc-9ceed",
  storageBucket: "ticketuc-9ceed.firebasestorage.app",
  messagingSenderId: "810543370297",
  appId: "1:810543370297:web:7482d921082606df7efde8",
  measurementId: "G-70HMXQ4WRY"
};

// Inicializar
const app = initializeApp(firebaseConfig);

// Servicios que vas a usar
export const auth = getAuth(app);
export const db = getFirestore(app);
