import React from 'react'
import styled from 'styled-components'

const Button = ({ purpouse, text, className }) => {
	return (
		<button className={className} onClick={purpouse}>
			{text}
		</button>
	)
}

const ButtonP = styled(Button)`
	border: none;
	outline: none;
	color: var(--btn-color);
	background-color: var(--btn-bg);
	transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
	width: 100px;
	height: 35px;
	cursor: pointer;

	&:hover {
		background-color: var(--btn-hover);
		box-shadow: var(--shadow-elevation-low-highscore);
	}
`

export default ButtonP
