import './ScrollView.scss';
import React from 'react';
import Loading from 'component/Loading/Loading';

class ScrollView extends React.Component{

	// 滚动加载逻辑
	onloadPage(){
			let clientHeight = document.documentElement.clientHeight ; 
			let scrollHeight = document.body.scrollHeight ; 
			let scrollTop = document.documentElement.scrollTop ;

			//滚动到底部提前的阈值
			let preLoadDis = 30 ;
			if((scrollTop + clientHeight) >= (scrollHeight - preLoadDis)){
				if(!this.props.isend){
					this.props.loadCallback && this.props.loadCallback();
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

	render(){
		return (
			<div className="scrollview">
				{this.props.children}
				<Loading isend={this.props.isend}/>
			</div>
		)
		
	}
}

export default ScrollView;