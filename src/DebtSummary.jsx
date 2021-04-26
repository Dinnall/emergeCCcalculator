import React from 'react';
import Format from './helpers/format.js';
import Calc from './helpers/calc.js';
class DebtSummary extends React.Component {
	render() {
		let Result = Calc.all(this.props.cards);
		let totalBalance = 0;
		let totalInterest = 0;
		this.props.cards.forEach(singleCard => {
			totalBalance += parseFloat(singleCard.balance);
		});
		this.props.cards.forEach(singleCard => {
			totalInterest += (singleCard.balance / totalBalance) * singleCard.rate;
		});
		totalInterest = Calc.round(totalInterest);
		return (
			<div className="debt-summary">
				<table>
					<thead>
						<tr>
							<th colSpan="100">Debt summary</th>
						</tr>
						<tr>
							<th></th>
							<th>Balance</th>
							<th>Interest Rate</th>
							<th>Monthly Payment</th>
							<th>Interest Paid</th>
							<th>Total Payments</th>
							<th>Time to Payoff</th>
						</tr>
					</thead>
					<tbody>
						{this.props.cards.map((singleCard, i) => {
							let singleResult = Calc.single(singleCard);
							return (<tr key={i}>
								<th>Credit Card #{i + 1}</th>
								<td>{Format.usd(singleCard.balance, false)}</td>
								<td>{Format.percent(singleCard.rate)}</td>
								<td>{Format.usd(singleResult.monthly * 100, false)}</td>
								<td>{Format.usd(singleResult.interestPaid * 100, false)}</td>
								<td>{Format.usd(singleResult.total * 100, false)}</td>
								<td>{Format.months(singleResult.payoff)}</td>
							</tr>);
						})}
					</tbody>
					<tfoot>
						<tr>
							<th>Totals</th>
							<td>{Format.usd(totalBalance, false)}</td>
							<td>{totalInterest + '%'}</td>
							<td>{Format.usd(Result.monthly * 100, false)}</td>
							<td>{Format.usd(Result.interestPaid * 100, false)}</td>
							<td>{Format.usd(Result.total * 100, false)}</td>
							<td>{Format.months(Result.payoff)}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
export default DebtSummary;