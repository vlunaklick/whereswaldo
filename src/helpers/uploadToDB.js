import db from '../firebase/config'
import firebase from 'firebase/app'
import 'firebase/firestore'

const uploadToDB = scores => {
	let firstMap = db.collection('maps').doc('firstmap')

	let updateFirstMap = firstMap.update({
		topscorers: {
			1: firebase.firestore.FieldValue.arrayUnion(
				scores.flat()[0],
				scores.flat()[1]
			),
			2: firebase.firestore.FieldValue.arrayUnion(
				scores.flat()[2],
				scores.flat()[3]
			),
			3: firebase.firestore.FieldValue.arrayUnion(
				scores.flat()[4],
				scores.flat()[5]
			),
			4: firebase.firestore.FieldValue.arrayUnion(
				scores.flat()[6],
				scores.flat()[7]
			),
			5: firebase.firestore.FieldValue.arrayUnion(
				scores.flat()[8],
				scores.flat()[9]
			),
		},
	})
}

export default uploadToDB
