import './ListItem.scss';
import React from 'react';
/**
	外卖类目具体信息
**/
class ListItem extends React.Component{
	constructor(props){
		super(props);
	}

	renderProduct(data){
		let list = data.product_list;

        // 复制数组防止引用
        let _list = JSON.parse(JSON.stringify(list));
        // push一个用来计算总计的{type：more}
        _list.push({type: 'more'});

		return _list.map((item,index)=>{
			if(item.type === 'more'){
				return <div key={index} className="item-product item-price">
						<span>...</span>
						<div className="p-total-count">
							总计{data.product_count}个菜，实付<span className="total-price">¥{data.total}</span>
						</div>
					</div>
			}
			return <div key={index} className="item-product">
					<span className="product-name">{item.product_name}</span>
					<span className="product-count">x{item.product_count}</span>
				</div>
		});
		
	}

	// 跳转到评价页面
	goEval(){

	}

	renderComment(data){
		let evaluation = !data.is_comment;
		if(evaluation)
		return <div className="order-item-comment">
					<div className="evalution-btn" click={this.goEval()}>评价</div>
				</div>
	}

	render(){
		let item = this.props.itemData;
		return (
			<div className="order-item">
				<div className="order-item-inner">
					<img className="item-img" src={item.poi_pic} />
					<div className="item-right">
						<div className="item-top">
							<p className="order-name one-line">{item.poi_name}</p>
							<div className="arrow">&gt;</div>
							<div className="order-state">{item.status_description}</div>
						</div>
						<div className="item-bottom">
							{this.renderProduct(item)}
						</div>
					</div>
				</div>
				{this.renderComment(item)}
			</div>
		) ;
	}
}
export default ListItem;