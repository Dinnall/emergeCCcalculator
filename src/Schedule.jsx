import React from 'react';
import Format from './helpers/format.js';
class Schedule extends React.Component {
	render() {
		return (
			<div className="payment-schedule">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Payment</th>
							<th>Interest</th>
							<th>Total Principal</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{this.props.schedule.map((singleSchedule, i) => {
							return (<tr key={i}>
								<th>{i ? i : ''}</th>
								<td>{Format.usd(singleSchedule.payment * 100, false)}</td>
								<td>{Format.usd(singleSchedule.interest, false)}</td>
								<td>{Format.usd(singleSchedule.principal, false)}</td>
								<td>{Format.usd(singleSchedule.balance * 100, false)}</td>
							</tr>);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Schedule;