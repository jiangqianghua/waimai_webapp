import './Order.scss';

import React from 'react'
import {connect} from 'react-redux';
import ListItem from './ListItem/ListItem';
import {getOrderData} from '../actions/orderAction';
import ScrollView from 'component/ScrollView/ScrollView';

/**
	首页代码
**/
class Order extends React.Component{
	constructor(props){
		super(props);

			// 加载的页码
		this.page = 0 ;
		// 请求第一屏数据
		this.fetchData(this.page );
		//表示是否可以滚动
		this.state = {
			isend:false,
		}
	}

	fetchData(page){
		this.props.dispatch(getOrderData(page));
	}

	// 滚动加载逻辑
	onloadPage(){
		this.page++;
		if(this.page > 3){
			this.setState({
				isend:true,
			});
		}else{
			this.fetchData(this.page);
		}
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
				<ScrollView loadCallback={this.onloadPage.bind(this)} isend={this.state.isend}>
					<div className="order-list">
						
							{this.renderList()}

					</div>
				</ScrollView>
			</div>
		) ;
	}
}

export default connect(
	state => ({
			list: state.orderReducer.list,
		})
)(Order) ;