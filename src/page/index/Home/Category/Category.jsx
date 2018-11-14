import './Category.scss';
import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getHeaderData} from '../../actions/categoryAction';
/**
	外卖类别
**/
class Category extends React.Component{
	constructor(props){
		super(props);
		this.fetchData();
	}

	fetchData(){
		axios({
			method:'get',
			url:'/json/head.json'
		}).then((resp)=>{
			this.props.dispatch(getHeaderData(resp.data));
		});
	}

	renderItem(){
		let items = this.props.items;
		if(items){
			return items.map((item,index)=>{
				index;
				return <div key={index}>{item.key,item.name}</div>
			});
		}
	}

	render(){
		return (
			<div className="category－content">
				{this.renderItem()}
			</div>
		) ;
	}
}
export default connect(
	state => ({
		items: state.categoryReducer.items,
	})
)(Category);