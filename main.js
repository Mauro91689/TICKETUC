import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, "test@test.com", "123456")
  .then((userCredential) => {
    console.log("Usuario creado:", userCredential.user);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function probarFirebase() {
  try {
    const docRef = await addDoc(collection(db, "prueba"), {
      nombre: "Mauro",
      mensaje: "Funciona Firebase 🚀"
    });

    console.log("Documento guardado con ID:", docRef.id);
  } catch (e) {
    console.error("Error:", e);
  }
}

probarFirebase();
