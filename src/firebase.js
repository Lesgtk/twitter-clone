import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1IB6pil6td-7xqKa03F4eAkswOHEesfE",
  authDomain: "twitter-clone-c8848.firebaseapp.com",
  projectId: "twitter-clone-c8848",
  storageBucket: "twitter-clone-c8848.appspot.com",
  messagingSenderId: "370823873638",
  appId: "1:370823873638:web:dd7b9839825498bfb219a7",
  measurementId: "G-VFMY0LK5DK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;