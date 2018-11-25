import React from 'react';

import {connect} from 'react-redux';

import NavHeader from 'component/NavHeader/NavHeader';

import Header from '../Header/Header'
class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
            <div>
                <NavHeader title="分类" />
                <Header />
            </div>
        );
	}
}

export default connect(

)(Main);