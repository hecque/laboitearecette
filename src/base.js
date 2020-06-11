import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database'

const firebaseConf = firebase.initializeApp ( {
        apiKey: "AIzaSyAGzjwOfaXA5R4u1-fWuRY-FeMoUCKUsOk",
        authDomain: "la-boite-a-recettes.firebaseapp.com",
        databaseURL: "https://la-boite-a-recettes.firebaseio.com",
        projectId: "la-boite-a-recettes",
        storageBucket: "la-boite-a-recettes.appspot.com",
        messagingSenderId: "468320744072",
        appId: "1:468320744072:web:e476a0c4ed4b1306b3253d"
})

const base = Rebase.createClass(firebaseConf.database())

export { firebaseConf }

export default base