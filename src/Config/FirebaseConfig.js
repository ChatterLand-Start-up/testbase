import Fb from 'firebase';

const config = {
    apiKey: "AIzaSyBNmIFAS0gik3qmliWp_zYNWgQupe6EI_w",
    authDomain: "chatter-s-land.firebaseapp.com",
    projectId: "chatter-s-land",
    storageBucket: "chatter-s-land.appspot.com",
    messagingSenderId: "199851842950",
    appId: "1:199851842950:web:e3270884ac71be7bb3e007",
    measurementId: "G-7F0CPQFGPV"
};

const firebase = Fb.initializeApp(config);

export default firebase;