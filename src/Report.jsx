import React from 'react';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';
import BalanceChart from './BalanceChart.jsx';
import DebtSummary from './DebtSummary.jsx';
import Schedule from './Schedule.jsx';
import './css/report-print.css';

import ReactToPrint from 'react-to-print';

class Report extends React.Component {
	render() {
		let Result = Calc.all(this.props.cards, this.props.addExtra);
		let totalBalance = 0;
		this.props.cards.forEach(singleCard => {
			totalBalance += parseFloat(singleCard.balance);
		});
		return (<div className="report">
			<div className="report-inner" ref={el => (this.componentRef = el)}>
				<ReactToPrint
					trigger={() => {
						// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
						// to the root node of the returned component as it will be overwritten.
						return <span className="print-report">Print this report</span>;
					}}
					content={() => this.componentRef}
				/>
				<span className="close-report" onClick={() => this.props.report()}>Close report</span>
				{
					this.props.addExtra ?
						<h4>Paying a little more than required minimum total will take {Format.months(Result.payoff)} to payoff your debt.</h4>
						:
						<h4>Minimum payments will take {Format.months(Result.payoff)} to payoff your debt.</h4>
				}
				{
					this.props.addExtra ?
						<p>
							You owe a total of {Format.usd(totalBalance)} having a total monthly payment of {Format.usd(Result.monthly * 100)}.
						If you continue to make this same amount of additional payments it will take you {Format.months(Result.payoff)} to payoff this debt.
						Your total interest paid will now be {Format.usd(Result.interestPaid * 100)}.
					</p>
						:
						<p>
							You owe a total of {Format.usd(totalBalance)} having a total monthly payment of {Format.usd(Result.monthly * 100)}.
						If you continue to make the minimum payments it will take you {Format.months(Result.payoff)} to payoff this debt.
						The total interest paid will be {Format.usd(Result.interestPaid * 100)}.
					</p>
				}

				<h3>Debt payoff is estimated at {Format.months(Result.payoff)}</h3>
				<BalanceChart schedule={Result.schedule} />

				<DebtSummary cards={this.props.cards} />

				<h4>Credit Card Payment Schedule</h4>
				<Schedule schedule={Result.schedule} />
			</div>
		</div>);
	}
}
export default Report;