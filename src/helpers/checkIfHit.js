import threeRule from './threeRule'

const checkIfHit = (top, left, array) => {
	let firstTrue = false,
		secondTrue = false

	if (
		top > threeRule(parseInt(array[0]), window.innerWidth) - 25 &&
		threeRule(parseInt(array[0]), window.innerWidth) + 25 > top
	) {
		firstTrue = true
	}

	if (
		left > threeRule(parseInt(array[1]), window.innerWidth) - 25 &&
		threeRule(parseInt(array[1]), window.innerWidth) + 25 > left
	) {
		secondTrue = true
	}

	console.log(threeRule(parseInt(array[0]), window.innerWidth))
	console.log(threeRule(parseInt(array[1]), window.innerWidth))

	console.log(top)
	console.log(left)

	if (firstTrue && secondTrue) return true
	return false
}

export default checkIfHit
