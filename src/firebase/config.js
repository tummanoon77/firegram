import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDylvlNAY5q4tuLDbiyGwiJ9oKvCjBSbQ4",
  authDomain: "firegram-e3529.firebaseapp.com",
  projectId: "firegram-e3529",
  storageBucket: "firegram-e3529.appspot.com",
  messagingSenderId: "5958091480",
  appId: "1:5958091480:web:bbfe46b671b3da82604dad"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };