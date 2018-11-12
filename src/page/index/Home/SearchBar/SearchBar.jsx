import './SearchBar.scss';
import React from 'react';
//import {connect} from 'react-redux';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="search-bar">
				<div className="bar-location">
					<div className="location-icon"></div>
					<div className="location-text">南昌市</div>
				</div>
				<div className="search-btn">
					<p className="place-holder">鸡翅</p>
				</div>
			</div>
		);
	}
}

export default SearchBar;