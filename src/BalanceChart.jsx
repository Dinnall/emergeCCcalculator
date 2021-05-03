import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import Format from './helpers/format.js';
import AutoSizer from 'react-virtualized-auto-sizer'

import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	AreaSeries
} from 'react-vis';
class BalanceChart extends React.Component {
	render() {

		let data = [];
		let ticks = [];
		this.props.schedule.forEach((singleSchedule, i) => {
			if (this.props.schedule.length > 12 && i % 12 !== 0) return;
			ticks.push(i);
			data.push({
				x: i,
				y: singleSchedule.balance * 100
			});
		});
		return (
			<div className="BalanceChart">
				<AutoSizer>
					{({ width, height }) => (
						<XYPlot margin={{ left: 100 }} height={height} width={width}>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis
								tickValues={ticks}
							/>
							<YAxis
								tickFormat={v => Format.usd(v)}
							/>
							<AreaSeries
								className="paymentChart"
								curve="curveLinear"
								data={data}
								color="#014FA2"
							/>
						</XYPlot>
					)}
				</AutoSizer>
			</div>
		);
	}
}
export default BalanceChart;