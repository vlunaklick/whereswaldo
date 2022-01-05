const threeRule = (valor, propiedad) => {
	let image = document.getElementById('image')
	let heighS = image.height
	let widthS = image.width

	let scroll = window.scrollY

	if (propiedad === 'height') {
		return ((valor - scroll) * widthS) / 1920
	} else if (propiedad === 'width') {
		return (valor * widthS) / 1920
	}
}

export default threeRule
