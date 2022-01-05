import React from 'react'
import './ClickedScreen.css'
import styled from 'styled-components'

const ClickedScreen = ({ style }) => {
	return (
		<div className='clicked-screen' style={style}>
			<div className='list-characters'>
				<p className='character-click character-first'>Wally</p>
				<p className='character-click character-second'>Wizard</p>
				<p className='character-click character-last'>Wilma</p>
			</div>
		</div>
	)
}

export default ClickedScreen
