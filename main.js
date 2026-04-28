import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

async function probar() {
  try {
    await addDoc(collection(db, "prueba"), {
      mensaje: "Funciona 🚀"
    });
    console.log("Se guardó!");
  } catch (error) {
    console.error("Error:", error);
  }
}

probar();
