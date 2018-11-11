import {ADD_TODO} from './actionTypes.js'

export const addTodo = (obj) =>{
	return {
		type : ADD_TODO,
		obj : obj
	}
}