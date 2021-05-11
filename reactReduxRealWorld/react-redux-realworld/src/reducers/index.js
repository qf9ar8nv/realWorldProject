import { combineReducers } from "redux";
import counter from './counter';
import changeColor from './changeColor';

const rootReducer = combineReducers({
	counter,
	changeColor,
});

export default rootReducer
