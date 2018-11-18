import {LIST_DATA} from './actionTypes';
import axios from 'axios';


export const getListData = (page)=>(dispatch) =>{
	axios({
			method:'get',
			url:'/json/homelist.json'
		}).then((resp)=>{
			dispatch ({
				type: LIST_DATA,
				currentPage:page,
				obj:resp.data
			});
		});
	
}