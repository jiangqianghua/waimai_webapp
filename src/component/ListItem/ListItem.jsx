import './ListItem.scss';
import React from 'react';
/**
	外卖类目具体信息
**/
class ListItem extends React.Component{
	constructor(props){
		super(props);
	}
	//渲染是否是品牌或则是新到
	renderBrand(data){
		if(data.brand_type){
			return <div className="brand brand-pin">品牌</div>
		}else{
			return <div className="brand brand-xin">新到</div>
		}
	}

	//渲染星星得分方法
	renderScore(data){
		let wm_poi_score = data.wm_poi_score || '';

		let score = wm_poi_score.toString();

		let scoreArray = score.split('.');
		//满星个数
		let fullstar = parseInt(scoreArray[0]);
		// 半星个数
		let halfstar = parseInt(scoreArray[1]) >= 5 ?1 : 0;
		// 0星个数
		let nullstar = 5 - fullstar - halfstar;

		let startjsx = [];

		for(let i = 0 ; i < fullstar ; i++){
			startjsx.push(<div key={i+'full'} className="star fullstar"></div>);
		}

		if(halfstar){
			for(let j = 0 ; j < halfstar ; j++){
				startjsx.push(<div key={j+'half'} className="star halfstar"></div>);
			}
		}

		if(nullstar){
			for(let k = 0 ; k < nullstar ; k++){
				startjsx.push(<div key={k+'null'} className="star nullstar"></div>);
			}
		}
		return startjsx ;

	}

	renderMonthNum(data){
		let num = data.month_sale_num;

		if(num > 999){
			num = '999+';
		}
		return num;
	}

	// 是否渲染美团转送flag
	renderMeituanFlag(data){
		if(data.delivery_type){
			return <div className="item-meituan-flag">美团专送</div>
		}
		return null ;
	}

	renderOthers(data){
		let array  = data.discounts2;
		return array.map((item,index)=>{
			return(
				<div key={index} className="other-info">
					<img src={item.icon_url} className="other-tag" />
					<div className="other-content">{item.info}</div>
				</div>
			);
		});
	}

	render(){
		let data = this.props.itemData;
		return (
			<div className="r-item-content scale-1px">
				<img className="item-img" src={data.pic_url}/>
				{this.renderBrand(data)}
				<div className="item-info-content">
					<p className="item-title">{data.name}</p>
					<div className="item-desc clearfix">
						<div className="item-score">{this.renderScore(data)}</div>
						<div className="item-count">月售{this.renderMonthNum(data)}</div>
						<div className="item-distance">&nbsp;{data.distance}</div>
						<div className="item-time">{data.mt_delivery_time}&nbsp;|</div>
					</div>
					<div className="item-price">
						<div className="item-pre-price">{data.min_price_tip}</div>
						{this.renderMeituanFlag(data)}
					</div>
					<div className="item-others">
						{this.renderOthers(data)}
					</div>
				</div>
			</div>
		) ;
	}
}
export default ListItem;