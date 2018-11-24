import React from 'react';

import {connect} from 'react-redux';

//import {addTodo} from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar.jsx';

import { Route, withRouter } from 'react-router-dom';

import Home from '../Home/Home';

import Order from '../Order/Order';

import My from '../My/My';
class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<My />
				<BottomBar />
			</div>
		);
	}
}

export default connect(
	state => ({
		num:state.tabReducer.num
	})
)(Main);