import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBQCiY_sQiz33YnyiqEyQblcuZZChYC2zI",
    authDomain: "tukbooktest.firebaseapp.com",
    projectId: "tukbooktest",
    storageBucket: "tukbooktest.appspot.com",
    messagingSenderId: "391832081462",
    appId: "1:391832081462:web:0f081ed24b2cb05c8db497"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);