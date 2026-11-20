import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzT2RIk7PgT_JRGw3cPQPqrR8Ahm7HGL8",
  authDomain: "pmps-gold.firebaseapp.com",
  projectId: "pmps-gold",
  storageBucket: "pmps-gold.firebasestorage.app",
  messagingSenderId: "289826044015",
  appId: "1:289826044015:web:0646809f6e84901002759a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);