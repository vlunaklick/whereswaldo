import React from 'react'
import './ClickedScreen.css'

const ClickedScreen = ({ style, wallyFind, wilmaFind, wizardFind }) => {
	return (
		<div className='clicked-screen' style={style}>
			<div className='list-characters'>
				{!wallyFind ? <p className='character-click'>Wally</p> : ''}

				{!wizardFind ? <p className='character-click'>Wizard</p> : ''}

				{!wilmaFind ? <p className='character-click'>Wilma</p> : ''}
			</div>
		</div>
	)
}

export default ClickedScreen
