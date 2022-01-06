import React from 'react'
import { convertSeconds } from '../../helpers/converterSeconds'
import './HighscoreTable.css'
import ButtonP from '../ButtonP/ButtonP'

const HighscoreTable = ({ topScorer, timer, restartGame, showing, record }) => {
	let classBackground = showing
		? 'highscore-background highscore-background-show'
		: 'highscore-background'

	console.log(topScorer)

	return (
		<div className={classBackground}>
			<div className='highscore-container'>
				<div className='highscore-left'>
					<h3 className='highscore-left-title'>Highscores</h3>
					<p className='highscore-left-concursant'>
						{topScorer[0][0] + ': ' + convertSeconds(topScorer[0][1])}
					</p>
					<p className='highscore-left-concursant'>
						{topScorer[1][0] + ': ' + convertSeconds(topScorer[1][1])}
					</p>
					<p className='highscore-left-concursant'>
						{topScorer[2][0] + ': ' + convertSeconds(topScorer[2][1])}
					</p>
					<p className='highscore-left-concursant'>
						{topScorer[3][0] + ': ' + convertSeconds(topScorer[3][1])}
					</p>
					<p className='highscore-left-concursant'>
						{topScorer[4][0] + ': ' + convertSeconds(topScorer[4][1])}
					</p>
					<ButtonP text='Restart' purpouse={restartGame} />
				</div>
				<div className='highscore-rigth'>
					<div className='highscore-rigth-combo'>
						<h3 className='highscore-rigth-textyour'>Your time</h3>
						<p className='highscore-rigth-yourtime'>{convertSeconds(timer)}</p>
					</div>
					{record ? (
						<div className='highscore-rigth-add'>
							<label htmlFor='addRecord' className='highscore-rigth-label'>
								Upload Score
							</label>
							<input
								id='addRecord'
								type='text'
								maxLength='3'
								className='highscore-rigth-input'
							/>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}

export default HighscoreTable
