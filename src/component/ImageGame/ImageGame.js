import React from 'react'
import './ImageGame.css'
import ClickedScreen from '../ClickedScreen/ClickedScreen'

const ImageGame = ({
	source,
	clicked,
	madeClick,
	wallyFind,
	wilmaFind,
	wizardFind,
	clickWally,
	clickWilma,
	clickWizard,
	topValue,
	leftValue,
}) => {
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
					clickWally={clickWally}
					clickWilma={clickWilma}
					clickWizard={clickWizard}
				/>
			) : (
				''
			)}
			<img
				id='image'
				className='image-image'
				src={source}
				alt=''
				onClick={e => madeClick(e)}
			/>
		</div>
	)
}

export default ImageGame
