import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrcRYbD7cxm0jvdIdumEl7tTVqcZWzeBU",
    authDomain: "slack-clone-9b7f5.firebaseapp.com",
    projectId: "slack-clone-9b7f5",
    storageBucket: "slack-clone-9b7f5.appspot.com",
    messagingSenderId: "662966679667",
    appId: "1:662966679667:web:301b18d51c307121e9d206",
    measurementId: "G-YZ6EK9X2GG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
