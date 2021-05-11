const initalState = {
	color: 'white'
}

function changeColor(state = initalState, action) {
	switch (action.type) {
		case 'white': {
			return { ...state, color: 'white' }
		}
		case 'black': {
			return { ...state, color: 'black' }
		}
		case 'yellow': {
			return { ...state, color: 'yellow' }
		}
		default:
			return state
	}
}

export default changeColor