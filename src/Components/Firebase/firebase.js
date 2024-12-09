// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkhztELteTbs8mGYPf-hdldIeo9IdhR-o",
    authDomain: "acsproject-75c51.firebaseapp.com",
    projectId: "acsproject-75c51",
    storageBucket: "acsproject-75c51.firebasestorage.app",
    messagingSenderId: "350226710310",
    appId: "1:350226710310:web:ccd6faf33f932890fb8be7",
    measurementId: "G-GDY93LTW96"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
