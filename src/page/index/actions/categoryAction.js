import {HEAD_DATA} from './actionTypes';

export const getHeaderData = (obj)=>{
	return {
		type: HEAD_DATA,
		obj:obj
	};
}