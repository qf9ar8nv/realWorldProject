import React, { useState } from 'react'
import { createStore } from 'redux'

function Counter() {
	const [counter, setcounter] = useState(0)

	const increment = () => {
		setcounter(counter+1);
	}

	return (
		<div>
			Value: {counter} <button onClick={increment}>Incremtent</button>
		</div>
	)
}

function LandingPage() {
	return (
		<div>
			<Counter />
		</div>
	)
}

export default LandingPage;