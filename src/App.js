import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderPage from './component/header/Header'
import { useState } from 'react'
import useTimer from './hooks/useTimer'
import HighscoreTable from './component/highscoreTable/HighscoreTable'

function App() {
	let [wallyFound, changeWallyFind] = useState(false)
	let [wilmaFound, changeWilmaFound] = useState(false)
	let [wizardFound, changeWizardFound] = useState(false)

	let [record, changeRecord] = useState(false)

	let [showHigh, changeShowHigh] = useState(true)

	let [timer, start, stop, reset] = useTimer(0)

	const restartGame = () => {
		changeWallyFind(false)
		changeWilmaFound(false)
		changeWizardFound(false)
		reset()
		changeShowHigh(false)
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
			<HighscoreTable
				timer={timer}
				restartGame={restartGame}
				showing={showHigh}
				record={record}
			/>
		</div>
	)
}

export default App
