import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxq57WMhJioBpeoNzTyykGGpLHJAp0uAA",
  authDomain: "prepwise-e7be8.firebaseapp.com",
  projectId: "prepwise-e7be8",
  storageBucket: "prepwise-e7be8.firebasestorage.app",
  messagingSenderId: "38521260197",
  appId: "1:38521260197:web:9d9b0a31a5293cf711254c",
  measurementId: "G-6MY5ZSGQZ4",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
