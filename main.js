import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, "test@test.com", "123456")
  .then((userCredential) => {
    console.log("Usuario creado:", userCredential.user);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
