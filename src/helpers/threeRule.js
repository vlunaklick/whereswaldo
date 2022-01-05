const threeRule = (valor, propiedad) => {
	let image = document.getElementById('image')
	let widthS = image.width

	if (propiedad === 'height') {
		return (valor * widthS) / 1920
	} else if (propiedad === 'width') {
		return (valor * widthS) / 1920
	}
}

export default threeRule
