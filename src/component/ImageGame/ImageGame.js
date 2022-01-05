import React from 'react'
import './ImageGame.css'

const ImageGame = ({ source }) => {
	return (
		<div className='image-container'>
			<img className='image-image' src={source} alt='' />
		</div>
	)
}

export default ImageGame
