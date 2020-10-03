import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDWGfWvCFn0gU1GAeS5jpJmQ7nI9PnXaI",
  authDomain: "whatsapp-clone-f9460.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-f9460.firebaseio.com",
  projectId: "whatsapp-clone-f9460",
  storageBucket: "whatsapp-clone-f9460.appspot.com",
  messagingSenderId: "800445802274",
  appId: "1:800445802274:web:503405c32026d97ca7277b",
  measurementId: "G-86BBPH7KTJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
