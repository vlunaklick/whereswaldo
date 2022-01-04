import React from 'react'
import wally from '../../images/wally.png'
import wilma from '../../images/wilma.png'
import wizard from '../../images/wizard.gif'
import './Header.css'

const HeaderPage = ({
	timer = '00:00',
	wallyFind = false,
	wilmaFind = false,
	wizardFind = false,
}) => {
	return (
		<header className='header-container'>
			<h1 className='header-title'>Where's Waldo?</h1>
			<p className='header-timer'>{timer}</p>
			<div className='header-images-container'>
				<img
					className={
						wallyFind
							? 'header-images-image header-grey-img'
							: 'header-images-image'
					}
					src={wally}
					alt='Wally character'
				/>
				<img
					className={
						wilmaFind
							? 'header-images-image header-grey-img'
							: 'header-images-image'
					}
					src={wilma}
					alt='Wilma character'
				/>
				<img
					className={
						wizardFind
							? 'header-images-image header-grey-img'
							: 'header-images-image'
					}
					src={wizard}
					alt='Wizard character'
				/>
			</div>
		</header>
	)
}

export default HeaderPage
