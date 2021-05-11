const initalState = {
	value: 0
}

function counter(state = initalState, action) {
	switch (action.type) {
		case 'increment': {
			return { ...state, value: state.value + 1 }
		}
		case 'decrement': {
			return { ...state, value: state.value - 1 }
		}
		case 'returnToZero': {
			return {...state, value: 0}
		}
		default:
			return state
	}
}

export default counter