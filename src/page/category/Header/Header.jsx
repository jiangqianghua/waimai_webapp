import './Header.scss';
import React from 'react';
import {connect} from 'react-redux';

import {changeTab,getFilterData} from '../actions/headerAction';

import {TABKEY} from '../config.js';
class Header extends React.Component{

	constructor(props){
		super(props);
		this.fetchData();
	}
	changeTab(key){
		console.log(key);
		this.props.dispatch(changeTab({
			activeKey:key
		}));
	}

	fetchData(){
		this.props.dispatch(getFilterData());
	}

	renderTabs(){
		let tabs = this.props.tabs ; 
		let array = [];
		for(let key in tabs){
			let item = tabs[key];
			let cls = item.key + ' item';
			if(item.key == this.props.activeKey){
				cls += ' current';
			}

			array.push(
				<div className={cls} key={item.key} onClick={()=>this.changeTab(item.key)}>
					{item.text}
				</div>
			);
		}
		return array ;
	}

	renderCateInnerContent(items/**,cateList**/){
		return items.sub_category_list.map((item,index)=>{
			let cls = item.active ? 'cate-box-inner active':'cate-box-inner';
			return (
				<div className="cate-box" key={index}>
					<div className={cls}>
						{item.name}({item.quantity})
					</div>
				</div>
			);
		});
	}

	renderCateContent(){
		let cateList = this.props.filterData.category_filter_list || [];
		return cateList.map((item,index)=>{
			return (
					<li className="cate-item" key={index}>
						<p className="item-title">{item.name}<span className="item-count">{item.quantity}</span></p>
						<div className="item-content">
							{this.renderCateInnerContent(item,cateList)}
						</div>
					</li>
				);
		});
	}

	// 渲染过滤面板
	renderContent(){
		let tabs = this.props.tabs ; 
		let array = [] ;
		for(let key in tabs){
			let item = tabs[key];
			let cls = item.key + '-panel';
			if(item.key === this.props.activeKey){
				cls += ' current';
			}
			if(item.key === TABKEY.cate){
				array.push(
					<ul key={item.key} className={cls}>
						{this.renderCateContent()}
					</ul>
					);
			}else if(item.key === TABKEY.type){
				array.push(
					<ul key={item.key} className={cls}>
						
					</ul>
					);
			}else if(item.key === TABKEY.filter){
				array.push(
					<ul key={item.key} className={cls}>
						
					</ul>
					);
			}
		}
		return array;
	}

	render(){
		return (
			<div className="header">
				<div className="header-top">
					{this.renderTabs()}
				</div>
				<div className="panel">
					<div className="panel-inner">
						{this.renderContent()}
					</div>
					
				</div>
			</div>
		);
	}
}

export default connect(
	state =>({
		tabs : state.headerReducer.tabs,
		activeKey: state.headerReducer.activeKey ,
		filterData:state.headerReducer.filterData
	})
)(Header) ;