import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAkrXUFjL-E0TgflTaifhF-8NTYqSMMd2w",
  authDomain: "whatsapp-2-f4149.firebaseapp.com",
  databaseURL: "https://whatsapp-2-f4149-default-rtdb.firebaseio.com",
  projectId: "whatsapp-2-f4149",
  storageBucket: "whatsapp-2-f4149.appspot.com",
  messagingSenderId: "692110208963",
  appId: "1:692110208963:web:b31ed9f44212000e6b1776",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
