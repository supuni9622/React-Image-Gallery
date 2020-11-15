 import * as firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDwniAyBO81jTTommv7taTDdr72tZvyGhw",
    authDomain: "react-image-gallery-3784d.firebaseapp.com",
    databaseURL: "https://react-image-gallery-3784d.firebaseio.com",
    projectId: "react-image-gallery-3784d",
    storageBucket: "react-image-gallery-3784d.appspot.com",
    messagingSenderId: "209969702196",
    appId: "1:209969702196:web:7e7bec1530c74ef3ebf161",
    measurementId: "G-3SQTCWSW53"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);