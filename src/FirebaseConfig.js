import firebase from 'firebase/app';
import 'firebase/firestore';

let config = {
  apiKey: "AIzaSyBjKYFVOYSaffLNM5Y34-vh6CUn8gbli3w",
  authDomain: "women-techmakers-website.firebaseapp.com",
  databaseURL: "https://women-techmakers-website.firebaseio.com",
  projectId: "women-techmakers-website",
  storageBucket: "women-techmakers-website.appspot.com",
  messagingSenderId: "730580487198"
};

firebase.initializeApp(config);

const db = firebase.firestore();

// db.collection('team').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data());
//   })
// });

export default firebase;