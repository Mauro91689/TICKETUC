import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUIYpYNUOflr6bEtYxshHwlhKZ_bM3G2k",
  authDomain: "ticketuc-9ceed.firebaseapp.com",
  projectId: "ticketuc-9ceed",
  storageBucket: "ticketuc-9ceed.firebasestorage.app",
  messagingSenderId: "810543370297",
  appId: "1:810543370297:web:ac9e320a07836c0a7efde8",
  measurementId: "G-GK5BKSXD7Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
