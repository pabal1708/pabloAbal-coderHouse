import firebase from "firebase";

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBjFcIxgd0fdLfjez0a1au-D4NvbxzidwQ",
    authDomain: "cervezapp-358c6.firebaseapp.com",
    projectId: "cervezapp-358c6",
    storageBucket: "cervezapp-358c6.appspot.com",
    messagingSenderId: "245223028005",
    appId: "1:245223028005:web:5846a89742f1593d00d6cc"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();