import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG8btqdnguHaWEkufK_Nn81uzPCx4yVrM",
  authDomain: "disneyplus-3f947.firebaseapp.com",
  projectId: "disneyplus-3f947",
  storageBucket: "disneyplus-3f947.appspot.com",
  messagingSenderId: "651996923265",
  appId: "1:651996923265:web:0007626423dcf0b74d9480",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const authConfig = firebase.auth();
const provider = new firebase.authConfig.GoogleAuthProvider();
const storage = firebase.storage();

export { authConfig, provider, storage };
export default dbConfig;
