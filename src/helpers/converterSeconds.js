export function convertSeconds(time) {
	let seconds, minutes

	10 >= time % 60 ? (seconds = `0${time % 60}`) : (seconds = time % 60)
	10 >= time / 60
		? (minutes = `0${Math.floor(time / 60)}`)
		: (minutes = Math.floor(time / 60))

	return `${minutes}:${seconds}`
}
