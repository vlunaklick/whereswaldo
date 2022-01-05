import React from 'react'
import ButtonP from '../ButtonP/ButtonP'
import './newGame.css'

export default function NewGame({ starting, showing }) {
	let classBackground = showing
		? 'highscore-background highscore-background-show'
		: 'highscore-background'
	return (
		<div className={classBackground}>
			<div className='new-container'>
				<h3 className='new-title'>Where's Waldo?</h3>
				<div className='new-text'>
					<p className='new-paragraph'>
						In this game you need to search three characters to get the win!
					</p>
					<p className='new-paragraph'>Are you fast enough?</p>
				</div>
				<ButtonP text='Start' purpouse={starting} />
			</div>
		</div>
	)
}
