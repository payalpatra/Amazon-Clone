// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA50SoA-pGgQvAI_BpXXZ_1SXf3P7UQi-E",
  authDomain: "clone-b3e04.firebaseapp.com",
  databaseURL: "https://clone-b3e04.firebaseio.com",
  projectId: "clone-b3e04",
  storageBucket: "clone-b3e04.appspot.com",
  messagingSenderId: "543483637476",
  appId: "1:543483637476:web:31f98c9a9d99986e3106f1",
  measurementId: "G-890E4YS5F2",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
