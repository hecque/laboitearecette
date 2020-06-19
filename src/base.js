import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database'

const firebaseConf = firebase.initializeApp ( {
        apiKey: //private,
        authDomain: "la-boite-recettes.firebaseapp.com",
        databaseURL: "https://la-boite-recettes.firebaseio.com",
        projectId: "la-boite-recettes",
        storageBucket: "la-boite-recettes.appspot.com",
        messagingSenderId: "685125016732"
})

const base = Rebase.createClass(firebaseConf.database())

export { firebaseConf }

export default base
