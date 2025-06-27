// src/config/firebase.js
// Firebase v9 Modular Syntax

import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// If you need storage:
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAf7O0xRssDd3wOJStKXDjznnsoFepV29Q",
  authDomain: "ecommerceproject-54762.firebaseapp.com",
  projectId: "ecommerceproject-54762",
  storageBucket: "ecommerceproject-54762.appspot.com",
  messagingSenderId: "739517416768",
  appId: "1:739517416768:android:e3aa67f15fb9ba857b66a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
// export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app); // Optional, for uploading files
