const initalState = {
	status: 'All',
	colors: []
}

export default function filtersReducer(state = initalState, action){
	switch(action.type){
		case 'filters/statusFilterChanged': {
			return {
				...state,
				filters: {
					...state.filters,
					status: action.payload
				}
			}
		}
		default:
			return state
	}
}