import React from 'react'

import Header from './Header/Header';

/**
	首页代码
**/
class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header />
			</div>
		) ;
	}
}

export default Home ;