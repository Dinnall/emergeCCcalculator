import React from 'react';
import CardResult from './CardResult.jsx';
import CardInput from './CardInput.jsx';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';


class SingleCard extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		let Result = Calc.single(this.props.data);
		return (
			<div className="single-card">

				<div className="card-header">
					<CardInput name="balance" value={this.props.data.balance} type="big" onChange={this.handleChange} label="Credit card balance" />
					<CardInput name="rate" value={this.props.data.rate} type="bubble" onChange={this.handleChange} label="Credit card APR" />
					<CardInput name="minimum" value={this.props.data.minimum} type="bubble" onChange={this.handleChange} label="Minimum payment" />
					<CardInput name="extra" value={this.props.data.extra} type="bubble" onChange={this.handleChange} label="Monthly additionally" />
				</div>
				<div className="card-summary" ref={el => (this.componentRef = el)}>
					<CardResult label="Monthly payment" value={Format.usd(Result.monthly * 100)} />
					<CardResult label="Balance payoff" value={Format.months(Result.payoff)} />
					<CardResult label="Total payments" value={Format.usd(Result.total * 100)} />
				</div>

				<div className="card-footer">
					{this.props.clone &&
						<div className="card-clone pointer" onClick={() => this.props.clone()}>
							Clone
						</div>
					}
					{this.props.remove &&
						<div className="card-remove pointer" onClick={() => this.props.remove()}>
							Remove
						</div>
					}
				</div>

			</div>
		);
	}
	handleChange(e) {
		let value = e.target.value;
		value = value.replaceAll(/[^0-9]/g, '');
		let name = e.target.name;
		let current = this.props.data;
		if (value > 36 && name === 'rate') value = 36;
		if (value > 20 && name === 'minimum') value = 20;
		if (value > 100000 && name === 'extra') value = 100000;
		if (typeof current[name] !== 'undefined') {
			current[name] = value;
			this.props.update(current);
		}

	}
}
export default SingleCard;