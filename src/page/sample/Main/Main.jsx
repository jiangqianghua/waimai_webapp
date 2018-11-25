import React from 'react';

import {connect} from 'react-redux';


class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
            <div>
                bbb
            </div>
        );
	}
}

export default connect(

)(Main);