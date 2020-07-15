import firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyC6H1Y_MKF_s7BLGBV5pHDQWEsxpA2XlZk",
    authDomain: "gato-game.firebaseapp.com",
    databaseURL: "https://gato-game.firebaseio.com",
    projectId: "gato-game",
    storageBucket: "gato-game.appspot.com",
    messagingSenderId: "1052776841950",
    appId: "1:1052776841950:web:05ef17bdf7a594a40fb84f"

};
firebase.initializeApp(config);


export default firebase;
