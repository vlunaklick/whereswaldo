import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,

	authDomain: 'whereswaldo-3cdf8.firebaseapp.com',

	projectId: 'whereswaldo-3cdf8',

	storageBucket: 'whereswaldo-3cdf8.appspot.com',

	messagingSenderId: '46171214780',

	appId: '1:46171214780:web:3f6b2d777a01c764d551b9',

	measurementId: 'G-1GJW94YH9D',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
