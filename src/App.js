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

function App() {
	let [imgSrc, changeImgSrc] = useState('')

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

	const checkClickWally = (top, left) => {
		if (checkIfHit(top, left, wallyArray)) {
			correctMsg('Wally')
			changeWallyFound(true)
		} else {
			errorMsg()
		}
		changeImageClicked(false)
	}

	const checkClickWilma = (top, left) => {
		if (checkIfHit(top, left, wilmaArray)) {
			correctMsg('Wilma')
			changeWilmaFound(true)
		} else {
			errorMsg()
		}
		changeImageClicked(false)
	}

	const checkClickWizard = (top, left) => {
		if (checkIfHit(top, left, wizardArray)) {
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
				activateClick={changeImageClicked}
				wallyFind={wallyFound}
				wilmaFind={wilmaFound}
				wizardFind={wizardFound}
				clickWally={checkClickWally}
				clickWilma={checkClickWilma}
				clickWizard={checkClickWizard}
			/>

			<HighscoreTable
				timer={timer}
				restartGame={restartGame}
				showing={showHigh}
				record={record}
				changeRecord={changeRecord}
			/>
		</div>
	)
}

export default App
