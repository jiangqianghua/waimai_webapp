import './My.scss';

import React from 'react'

class My extends React.Component{
	render(){
		return(
			<div className="my">
				<div className="header">
					<img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543001320580&di=9585b9ba95b93e0094f1e415f50856fe&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F19%2F30%2F68H58PICgNJ_1024.jpg" />
					<p className="name">jiangqianghua &gt;</p>
				</div>
				<div className="content">
					<ul className="items">
						<li className="address">
							收货地址
						</li>
						<li className="money">
							商家代金劵
						</li>
					</ul>
					<ul className="items">
						<li className="email">
							意见反馈
						</li>
						<li className="question">
							常见问题
						</li>
					</ul>
					<p className="tel">客服电话：15801523721</p>
					<p className="time">服务时间：9:00-21:00</p>
				</div>
			</div>
		);
	}
}

export default My;