import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import Format from './helpers/format.js';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis';
class BalanceChart extends React.Component{
	render(){
		
		let data = [];
		let ticks = [];
		this.props.schedule.forEach((singleSchedule, i) => {
			if(i % 12 !== 0) return;
			ticks.push(i);
			data.push({
				x: i,
				y: singleSchedule.balance * 100
			});
		});
		let width = 800,
			height = 400;
		if(window.matchMedia('(max-width: 800px)').matches){
			width = 400;
			height = 200;
		}
		if(window.matchMedia('(max-width: 400px)').matches){
			width = 250;
			height = 150;
		}
		if(typeof this.props.scale !== 'undefined'){
			width *= this.props.scale;
			height *= this.props.scale;
		}
		return (

			<div className="BalanceChart">
				<XYPlot width={width} height={height} margin={{left: 100}}>
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
						color="#33208e"
				  	/>
				</XYPlot>
			</div>
		);
	}
}
export default BalanceChart;