import './ContentList.scss';
import React from 'react';
import {connect} from 'react-redux';

import ListItem from 'component/ListItem/ListItem'
import {getListData} from '../actions/contentListAction';

import ScrollView from 'component/ScrollView/ScrollView';
/**
	外卖类别
**/
class ContentList extends React.Component{
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


	fetchData(page){
		this.props.dispatch(getListData(page));
	}

	renderItems(){
		let list = this.props.list ; 
		return list.map((item,index) =>{
			return <ListItem key={index} itemData={item}></ListItem>	
		});
	}

	render(){
		return (
			<div className="list-content">
				<ScrollView loadCallback={this.onloadPage.bind(this)} isend={this.state.isend}>
					{this.renderItems()}
				</ScrollView>
			</div>
		) ;
	}
}
export default connect(
	state => ({
		list: state.contentListReducer.list,
	})
)(ContentList);