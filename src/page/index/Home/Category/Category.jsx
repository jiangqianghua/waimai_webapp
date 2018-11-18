import './Category.scss';
import React from 'react';
import {connect} from 'react-redux';

import {getHeaderData} from '../../actions/categoryAction';
/**
	外卖类别
**/
class Category extends React.Component{
	constructor(props){
		super(props);
		this.fetchData();
	}

	// fetchData(){
	// 	axios({
	// 		method:'get',
	// 		url:'/json/head.json'
	// 	}).then((resp)=>{
	// 		this.props.dispatch(getHeaderData(resp.data));
	// 	});
	// }

	fetchData(){
		this.props.dispatch(getHeaderData())
	}

	renderItem(){
		let items = this.props.items;

		items = items.splice(0,8);

		if(items){
			return items.map((item,index)=>{
				return <div key={index} className="category-item">
						<img className="item-icon" src={item.url} />
						<p className="item-name">{item.name}</p>
					</div>
			});
		}
	}

	render(){
		return (
			<div className="category－content clearfix">
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