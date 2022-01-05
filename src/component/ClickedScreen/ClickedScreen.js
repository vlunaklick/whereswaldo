import React from 'react'
import './ClickedScreen.css'

const ClickedScreen = ({
	style,
	wallyFind,
	wilmaFind,
	wizardFind,
	clickWally,
	clickWizard,
	clickWilma,
}) => {
	return (
		<div className='clicked-screen' style={style}>
			<div className='list-characters'>
				{!wallyFind ? (
					<p
						className='character-click'
						onClick={e => clickWally(e.clientY, e.clientX)}>
						Wally
					</p>
				) : (
					''
				)}

				{!wizardFind ? (
					<p
						className='character-click'
						onClick={e => clickWizard(e.clientY, e.clientX)}>
						Wizard
					</p>
				) : (
					''
				)}

				{!wilmaFind ? (
					<p
						className='character-click'
						onClick={e => clickWilma(e.clientY, e.clientX)}>
						Wilma
					</p>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default ClickedScreen
