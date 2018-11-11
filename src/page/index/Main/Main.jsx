import React from 'react';

import {connect} from 'react-redux';

//import {addTodo} from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar.jsx';

import Home from '../Home/Home';

class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<Home />
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