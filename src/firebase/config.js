import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTN7tC_tQqe1GoviFcrxw2xUI4omNs9ZM",
    authDomain: "myymoney.firebaseapp.com",
    projectId: "myymoney",
    storageBucket: "myymoney.appspot.com",
    messagingSenderId: "274374263165",
    appId: "1:274374263165:web:b78a8745f8eb17df810c14"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}