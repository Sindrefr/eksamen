import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCwySZ5emjV7tnwnyq-4vKcygkhUBJP2Gc",
authDomain: "reinsdyrdatabase.firebaseapp.com",
projectId: "reinsdyrdatabase",
storageBucket: "reinsdyrdatabase.appspot.com",
messagingSenderId: "1016907453948",
appId: "1:1016907453948:web:617d199f5db87d9b4bce79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore();

// Collection References
const colRefEier = collection(db, "Eier",)
const colRefFlokk = collection(db, "Flokk",)
const colRefReinsdyr = collection(db, "Individuelt-Reinsdyr",)

