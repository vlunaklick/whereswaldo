import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderPage from './component/header/Header'
import { useState, useEffect } from 'react'
import useTimer from './hooks/useTimer'
import HighscoreTable from './component/highscoreTable/HighscoreTable'
import NewGame from './component/newGame/NewGame'
import ImageGame from './component/ImageGame/ImageGame'
import db from './firebase/config'
import checkIfHit from './helpers/checkIfHit'
import arrayHighscores from './helpers/doArrayHighscore'

function App() {
	let [imgSrc, changeImgSrc] = useState('')

	let [tabHighscore, changeTabHighscore] = useState([
		['VYA', 1687],
		['VYA', 1687],
		['VYA', 1687],
		['VYA', 1687],
		['VYA', 1687],
	])

	let [imageClicked, changeImageClicked] = useState(false)

	let [wallyFound, changeWallyFound] = useState(false)
	let [wilmaFound, changeWilmaFound] = useState(false)
	let [wizardFound, changeWizardFound] = useState(false)

	let [wallyArray, changeWallyArray] = useState([])
	let [wilmaArray, changeWilmaArray] = useState([])
	let [wizardArray, changeWizardArray] = useState([])

	let [record, changeRecord] = useState(false)

	let [showHigh, changeShowHigh] = useState(false)
	let [showStart, changeShowStart] = useState(true)

	let [timer, start, stop, reset] = useTimer(0)

	let [topValue, changeTopValue] = useState(0)
	let [leftValue, changeLeftValue] = useState(0)

	const madeClick = e => {
		changeImageClicked(prevState => !prevState)
		changeTopValue(e.clientY)
		changeLeftValue(e.clientX)
	}

	const restartGame = () => {
		changeWallyFound(false)
		changeWilmaFound(false)
		changeWizardFound(false)
		reset()
		changeImageClicked(false)
		changeRecord(false)
		changeShowHigh(false)
		changeShowStart(true)
	}

	const correctMsg = value => {
		toast.success(`Congrats you have found ${value} `, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		})
	}

	const errorMsg = () => {
		toast.error('Oh no! You missed :( Hope you have better luck next time.', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		})
	}

	const startGame = () => {
		changeShowStart(false)
		changeImageClicked(false)
		start()
	}

	const checkClickWally = () => {
		if (checkIfHit(topValue, leftValue, wallyArray)) {
			correctMsg('Wally')
			changeWallyFound(true)
		} else {
			errorMsg()
		}
		changeImageClicked(false)
	}

	const checkClickWilma = () => {
		if (checkIfHit(topValue, leftValue, wilmaArray)) {
			correctMsg('Wilma')
			changeWilmaFound(true)
		} else {
			errorMsg()
		}
		changeImageClicked(false)
	}

	const checkClickWizard = () => {
		if (checkIfHit(topValue, leftValue, wizardArray)) {
			correctMsg('the Wizard')
			changeWizardFound(true)
		} else {
			errorMsg()
		}
		changeImageClicked(false)
	}

	const checkEnd = () => {
		if (wallyFound && wilmaFound && wizardFound) {
			stop()
			changeShowHigh(true)
		}
	}

	useEffect(() => checkEnd(), [wallyFound, wilmaFound, wizardFound])

	useEffect(() => {
		db.collection('maps')
			.get()
			.then(maps => {
				maps.forEach(map => {
					let place = map._delegate._document.data.value.mapValue.fields
					let arrayHi = place.topscorers.arrayValue.values
					changeImgSrc(place.map.stringValue)
					changeWallyArray([
						place.wally.arrayValue.values[0].integerValue,
						place.wally.arrayValue.values[1].integerValue,
					])
					changeWilmaArray([
						place.wilma.arrayValue.values[0].integerValue,
						place.wilma.arrayValue.values[1].integerValue,
					])
					changeWizardArray([
						place.wizard.arrayValue.values[0].integerValue,
						place.wizard.arrayValue.values[1].integerValue,
					])
					changeTabHighscore(arrayHighscores(arrayHi))
				})
			})
	}, [])

	return (
		<div className='container-app'>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				limit={1}
			/>

			<HeaderPage
				timer={timer}
				wallyFind={wallyFound}
				wilmaFind={wilmaFound}
				wizardFind={wizardFound}
			/>

			<NewGame starting={startGame} showing={showStart} />

			<ImageGame
				source={imgSrc}
				clicked={imageClicked}
				wallyFind={wallyFound}
				wilmaFind={wilmaFound}
				wizardFind={wizardFound}
				clickWally={checkClickWally}
				clickWilma={checkClickWilma}
				clickWizard={checkClickWizard}
				madeClick={madeClick}
				topValue={topValue}
				leftValue={leftValue}
			/>

			<HighscoreTable
				timer={timer}
				restartGame={restartGame}
				showing={showHigh}
				record={record}
				changeRecord={changeRecord}
				topScorer={tabHighscore}
			/>
		</div>
	)
}

export default App
