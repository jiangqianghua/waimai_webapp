import {HEAD_DATA} from './actionTypes';
import axios from 'axios';
// export const getHeaderData = (obj)=>{
// 	return {
// 		type: HEAD_DATA,
// 		obj:obj
// 	};
// }

// export const getHeaderData = (obj)=>(dispatch,getState) =>{
// 	axios({
// 			method:'get',
// 			url:'/json/head.json'
// 		}).then((resp)=>{
// 			dispatch ({
// 				type: HEAD_DATA,
// 				obj:resp.data
// 			});
// 		});
	
// }


export const getHeaderData = ()=>(dispatch) =>{
	axios({
			method:'get',
			url:'/json/head.json'
		}).then((resp)=>{
			dispatch ({
				type: HEAD_DATA,
				obj:resp.data
			});
		});
	
}