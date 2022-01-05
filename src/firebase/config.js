import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,

	authDomain: 'whereswaldo-3cdf8.firebaseapp.com',

	projectId: 'whereswaldo-3cdf8',

	storageBucket: 'whereswaldo-3cdf8.appspot.com',

	messagingSenderId: '46171214780',

	appId: '1:46171214780:web:58f7d2141a8bd792d551b9',

	measurementId: 'G-80QL73565T',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

const db = firestore.getFirestore()

export default db
