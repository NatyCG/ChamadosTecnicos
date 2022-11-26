import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9Oe0bAhWDjLGqjroD9_gnwBjxN1-nbhs",
    authDomain: "chamados-tecnicos123-48804.firebaseapp.com",
    projectId: "chamados-tecnicos123-48804",
    storageBucket: "chamados-tecnicos123-48804.appspot.com",
    messagingSenderId: "631870647823",
    appId: "1:631870647823:web:d070c4b4d2c3ab50d03d7a",
    measurementId: "G-ECMZMH0HEG"
  };
  
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;