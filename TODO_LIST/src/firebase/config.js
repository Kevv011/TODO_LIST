// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaQO6juyE5T7GTxyqkOpbQayX-_b8aRKk",
    authDomain: "todo-list-api-6b9bd.firebaseapp.com",
    projectId: "todo-list-api-6b9bd",
    storageBucket: "todo-list-api-6b9bd.appspot.com",
    messagingSenderId: "325028213547",
    appId: "1:325028213547:web:a0a8ee376d49f933e20b6e"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y exportacion de la instancia de la base de datos
const db = getFirestore(app);

export { db };

