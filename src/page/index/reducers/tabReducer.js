import {ADD_TODO,CHANGE_TAB} from '../actions/actionTypes.js';
//import (addTodo) from '../actions/tabAction.js';
import {TABKEY} from '../config.js';

const initState = {
	num:0,
	tabs:[
		{
			name:'首页',
			key: TABKEY.home
		},
		{
			name:'订单',
			key: TABKEY.order
		},
		{
			name:'我的',
			key: TABKEY.my
		},
	],
	activeKey: TABKEY.home   // 设置默认激活的tab
}
const addTodo = (state , action) => {
	let objNum = action.obj.num ; 
	let num = state.num ; 
	return {
		num: num + objNum 
	}
}

const changeTab = (state , action) => {
	let activeKey = action.obj.activeKey;
	return {...state , activeKey:activeKey};
}

const tabReducer = (state = initState , action) => {
	switch(action.type){
		case ADD_TODO: return addTodo(state,action);
		case CHANGE_TAB: return changeTab(state,action);
		default: return state;
	}
}
export default tabReducer;