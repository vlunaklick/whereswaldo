import { useRef, useState } from 'react'

export default function useTimer(time = 0) {
	let [timer, setTimer] = useState(time)
	let countRef = useRef()

	const start = () => {
		countRef.current = setInterval(() => {
			setTimer(prevState => prevState + 1)
		}, 1000)
	}

	const stop = () => {
		clearInterval(countRef.current)
	}

	const reset = () => {
		clearInterval(countRef.current)
		setTimer(0)
	}

	return [timer, start, stop, reset]
}
