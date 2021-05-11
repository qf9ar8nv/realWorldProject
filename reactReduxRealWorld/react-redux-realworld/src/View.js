import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function View() {
	const dispatch = useDispatch()
	const value = useSelector(state => state.value)
	const color = useSelector(state => state.color)

	const increment = () => {
		dispatch({ type: 'increment' })
		console.log(11);
	}
	const decrement = () => {
		dispatch({ type: 'decrement' })
	}
	const returnToZero = () => {
		dispatch({ type: 'returnToZero' })
	}

	const changeWhite = () => {
		dispatch({type: 'white'})
	}
	const changeBlack = () => {
		dispatch({type: 'black'})
	}
	const changeYellow = () => {
		dispatch({type: 'yellow'})
	}
	return (
		<>
			<div>
				value: {value}
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={returnToZero}>초기화</button>
			</div>
			<div>
				color: {color}
				<button onClick={changeWhite}>white</button>
				<button onClick={changeBlack}>black</button>
				<button onClick={changeYellow}>yellow</button>
			</div>
		</>

	)
}

export default View