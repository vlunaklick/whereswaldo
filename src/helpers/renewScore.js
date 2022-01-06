const renewScore = (array, newScore) => {
	let arrayN = array.slice()
	arrayN.push(newScore)

	arrayN.sort((a, b) => {
		return a[1] > b[1] ? 1 : -1
	})

	return arrayN.slice(0, 5)
}

export default renewScore
