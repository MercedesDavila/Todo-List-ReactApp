import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAg1m51X2Amnl8MmShdKazwhca_ObN2jbM",
    authDomain: "todoist-tut-cbdfb.firebaseapp.com",
    databaseURL: "https://todoist-tut-cbdfb.firebaseio.com",
    projectId: "todoist-tut-cbdfb",
    storageBucket: "todoist-tut-cbdfb.appspot.com",
    messagingSenderId: "540828958721",
    appId: "1:540828958721:web:2acdf59c25650383490000"
});

export { firebaseConfig as firebase };