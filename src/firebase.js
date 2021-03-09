import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb14hWIyQVbj_3xKXmxJ6n878boO4yA40",
  authDomain: "netflix-clone-23e31.firebaseapp.com",
  projectId: "netflix-clone-23e31",
  storageBucket: "netflix-clone-23e31.appspot.com",
  messagingSenderId: "1083457103740",
  appId: "1:1083457103740:web:2988e9c9ac1e724cc126f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
