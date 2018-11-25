import './ContentList.scss';
import React from 'react';
import {connect} from 'react-redux';

/**
	外卖类别
**/
class ContentList extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div className="list-content">
				aaa
			</div>
		) ;
	}
}
export default connect(
	// state => ({
	// 	list: state.contentListReducer.list,
	// })
)(ContentList);