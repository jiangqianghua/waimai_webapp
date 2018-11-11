import {ADD_TODO} from '../actions/actionTypes.js';
//import (addTodo) from '../actions/tabAction.js';

const initState = {
	num:0
}
const addTodo = (state , action) => {
	let objNum = action.obj.num ; 
	let num = state.num ; 
	return {
		num: num + objNum 
	}
}
const tabReducer = (state = initState , action) => {
	switch(action.type){
		case ADD_TODO: return addTodo(state,action);
		default: return state;
	}
}
export default tabReducer;