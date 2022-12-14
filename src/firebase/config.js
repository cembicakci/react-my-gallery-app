import firebase from 'firebase/app'
import 'firebase/storage' // storage is to store our images
import 'firebase/firestore' // this is the database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs_K3EuX0_5t47zlnLnOwlKXxEf7bFuEA",
    authDomain: "react-my-gallery-5efd1.firebaseapp.com",
    projectId: "react-my-gallery-5efd1",
    storageBucket: "react-my-gallery-5efd1.appspot.com",
    messagingSenderId: "459587627488",
    appId: "1:459587627488:web:f4a95fbf1c7d7295806385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };