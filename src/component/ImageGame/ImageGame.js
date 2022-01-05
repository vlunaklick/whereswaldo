import React from 'react'
import './ImageGame.css'
import ClickedScreen from '../ClickedScreen/ClickedScreen'
import { useState } from 'react'

const ImageGame = ({
	source,
	clicked,
	activateClick,
	wallyFind,
	wilmaFind,
	wizardFind,
}) => {
	let [topValue, changeTopValue] = useState(0)
	let [leftValue, changeLeftValue] = useState(0)

	const madeClick = e => {
		activateClick(prevState => !prevState)
		changeTopValue(e.clientY)
		changeLeftValue(e.clientX)
	}

	let style = {
		left: leftValue,
		top: topValue,
	}

	return (
		<div className='image-container'>
			{clicked ? (
				<ClickedScreen
					style={style}
					wallyFind={wallyFind}
					wilmaFind={wilmaFind}
					wizardFind={wizardFind}
				/>
			) : (
				''
			)}
			<img
				className='image-image'
				src={source}
				alt=''
				onClick={e => madeClick(e)}
			/>
		</div>
	)
}

export default ImageGame
