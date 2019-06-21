import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAti8m5tYLIWmHtAil2GLz-fQRabWKDGoI",
    authDomain: "react-native-db-13fd0.firebaseapp.com",
    databaseURL: "https://react-native-db-13fd0.firebaseio.com",
    projectId: "react-native-db-13fd0",
    storageBucket: "react-native-db-13fd0.appspot.com",
    messagingSenderId: "709762392191",
    appId: "1:709762392191:web:59d6b19f07bda0a7"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);