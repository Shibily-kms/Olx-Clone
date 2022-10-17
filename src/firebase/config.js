import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOmhGaBJa03aI80htvdkNFhHA6kV8t6G4",
    authDomain: "olx-clone-35c92.firebaseapp.com",
    projectId: "olx-clone-35c92",
    storageBucket: "olx-clone-35c92.appspot.com",
    messagingSenderId: "414138310478",
    appId: "1:414138310478:web:ad60f09954f4d357e5881f"
  };

  export default firebase.initializeApp(firebaseConfig)