import {CHANGE_TAB,GET_FILTER_DATA} from '../actions/actionTypes.js';
// import (addTodo) from '../actions/tabAction.js';
import {TABKEY} from '../config.js';

let tabs = {};

tabs[TABKEY.cate] = {
	key:TABKEY.cate,
	text:'全部分类',
	obj:{}
}

tabs[TABKEY.type] = {
	key:TABKEY.type,
	text:'综合排序',
	obj:{}
}

tabs[TABKEY.filter] = {
	key:TABKEY.filter,
	text:'筛选',
	obj:{}
}
const initState = {
	tabs:tabs,
	activeKey: TABKEY.cate,   // 设置默认激活的tab
	filterData:{},
	closePanel:true
}

const changeTab = (state , action) => {
	return {...state , activeKey:action.obj.activeKey , closePanel:action.obj.closePanel}
}

const getFilterData = (state , action) => {
	return {...state , filterData:action.obj.data}
}

const headerReducer = (state = initState , action) => {
	switch(action.type){
		case CHANGE_TAB: return changeTab(state, action);
		case GET_FILTER_DATA: return getFilterData(state, action);
		default: return state;
	}
}
export default headerReducer;