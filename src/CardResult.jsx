import React from 'react';
class CardResult extends React.Component{
	render(){
		return (<div className="card-result">
			<label>{this.props.label}</label>
			<span>{this.props.value}</span>
		</div>);
	}
}
export default CardResult;