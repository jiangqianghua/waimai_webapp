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
                <Route exact path="/home" component={Home}/>
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        );
	}
}

export default withRouter(connect(
    // state =>({
        
    // })
)(Main));