import './ContentList.scss';
import React from 'react';
import {connect} from 'react-redux';

import ListItem from './ListItem/ListItem'
import {getListData} from '../../actions/contentListAction';
import Loading from 'component/Loading/Loading';
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
			let clientHeight = document.documentElement.clientHeight ; 
			let scrollHeight = document.body.scrollHeight ; 
			let scrollTop = document.documentElement.scrollTop ;

			//滚动到底部提前的阈值
			let preLoadDis = 30 ;
			if((scrollTop + clientHeight) >= (scrollHeight - preLoadDis)){
				//console.log(scrollHeight)
				this.page++;
				if(this.page > 3){
					this.setState({
						isend:true,
					});
				}else{
					this.fetchData(this.page);
				}

			}
	}

	// 自动调用，组件加载调用
	componentWillMount(){
		window.addEventListener('scroll',this.onloadPage.bind(this));
	}

	// 组件销毁掉用
	componentWillUnmount(){
		window.removeEventListener('scroll',this.onloadPage.bind(this));
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
				<h4 className="list-title">
					<span className="title-line"></span>
					<span>附近商家</span>
					<span className="title-line"></span>
				</h4>
				{this.renderItems()}
				<Loading isend={this.state.isend}/>
			</div>
		) ;
	}
}
export default connect(
	state => ({
		list: state.contentListReducer.list,
	})
)(ContentList);