const checkRecord = (scores, timer) => {
	let value
	scores.forEach(array => {
		if (array[1] > timer) value = true
	})
	return value
}

export default checkRecord
