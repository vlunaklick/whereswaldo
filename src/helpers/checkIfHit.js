const checkIfHit = (top, left, array) => {
	let firstTrue = false,
		secondTrue = false

	if (top > parseInt(array[1][0]) - 25 && parseInt(array[1][1]) + 25 > top) {
		firstTrue = true
	}

	if (
		left - 31 > parseInt(array[0][0] - 25) &&
		parseInt(array[0][1]) + 25 > left - 31
	) {
		secondTrue = true
	}

	if (firstTrue && secondTrue) return true
	return false
}

export default checkIfHit
