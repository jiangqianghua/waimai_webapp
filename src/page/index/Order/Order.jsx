import './Order.scss';

import React from 'react'
import {connect} from 'react-redux';
import ListItem from './ListItem/ListItem';
import {getOrderData} from '../actions/orderAction';

/**
	首页代码
**/
class Order extends React.Component{
	constructor(props){
		super(props);
		this.fetchData(0);
	}

	fetchData(page){
		this.props.dispatch(getOrderData(page));
	}

	renderList(){
		let list = this.props.list;
		return list.map((item,index)=>{
			return <ListItem key={index} itemData={item}></ListItem>
		});
	}

	render(){
		return (
			<div className="order">	
				<div className="header">订单</div>
				<div className="order-list">
					{this.renderList()}
				</div>
			</div>
		) ;
	}
}

export default connect(
	state => ({
			list: state.orderReducer.list,
		})
)(Order) ;