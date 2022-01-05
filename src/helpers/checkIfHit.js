import threeRule from './threeRule'

const checkIfHit = (top, left, array) => {
	let firstTrue = false,
		secondTrue = false

	let scroll = window.scrollY

	let topValue = top

	if (scroll > 0) topValue = top + scroll
	if (
		topValue >= threeRule(parseInt(array[0]), 'height') - 40 &&
		threeRule(parseInt(array[0]), 'height') + 40 >= topValue
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
