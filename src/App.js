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

function App() {
	let [imgSrc, changeImgSrc] = useState('')

	let [imageClicked, changeImageClicked] = useState(false)

	let [wallyFound, changeWallyFind] = useState(false)
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
		changeWallyFind(false)
		changeWilmaFound(false)
		changeWizardFound(false)
		reset()
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
		start()
	}

	useEffect(() => {
		db.collection('maps')
			.get()
			.then(maps => {
				maps.forEach(map => {
					let place = map._delegate._document.data.value.mapValue.fields
					changeImgSrc(place.map.stringValue)
					changeWallyArray([
						[
							place.wally.arrayValue.values[0],
							place.wally.arrayValue.values[1],
						],
						[
							place.wally.arrayValue.values[2],
							place.wally.arrayValue.values[3],
						],
					])
					changeWilmaArray([
						[
							place.wilma.arrayValue.values[0],
							place.wilma.arrayValue.values[1],
						],
						[
							place.wilma.arrayValue.values[2],
							place.wilma.arrayValue.values[3],
						],
					])
					changeWizardArray([
						[
							place.wizard.arrayValue.values[0],
							place.wizard.arrayValue.values[1],
						],
						[
							place.wizard.arrayValue.values[2],
							place.wizard.arrayValue.values[3],
						],
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
