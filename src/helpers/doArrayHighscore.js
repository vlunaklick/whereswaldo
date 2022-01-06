const arrayHighscores = array => {
	let newArray = []

	for (let key in array) {
		newArray.push([
			array[key].arrayValue.values[0].stringValue,
			parseInt(array[key].arrayValue.values[1].integerValue),
		])
	}

	return newArray
}

export default arrayHighscores
