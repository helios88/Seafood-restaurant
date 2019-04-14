import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqLaXLIptsZ5sVQ71ZVisRG_yWWhgXi44",
    authDomain: "catchotheday-bb85a.firebaseapp.com",
    databaseURL: "https://catchotheday-bb85a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database()) 

// named export
export { firebaseApp}

// this is a default export
export default base;