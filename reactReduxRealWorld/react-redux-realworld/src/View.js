import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function View() {
	const dispatch = useDispatch()
	const value = useSelector(state => state.value)

	const increment = () => {
		dispatch({type: 'increment'})
	}
	const decrement = () => {
		dispatch({type: 'decrement'})
	}
	const returnToZero = () => {
		dispatch({type: 'returnToZero'})
	}
	return (
		<div>
			value: {value}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={returnToZero}>초기화</button>
		</div>
	)
}

export default View