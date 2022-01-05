import threeRule from './threeRule'

const checkIfHit = (top, left, array) => {
	let firstTrue = false,
		secondTrue = false

	if (
		top >= threeRule(parseInt(array[0]), 'height') - 40 &&
		threeRule(parseInt(array[0]), 'height') + 40 >= top
	) {
		firstTrue = true
	}

	if (
		left >= threeRule(parseInt(array[1]), 'width') - 40 &&
		threeRule(parseInt(array[1]), 'width') + 40 >= left
	) {
		secondTrue = true
	}

	if (firstTrue && secondTrue) return true
	return false
}

export default checkIfHit
