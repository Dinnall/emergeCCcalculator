import React from 'react';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';
import BalanceChart from './BalanceChart.jsx';
import { FaRegQuestionCircle } from "react-icons/fa";


class BigResultsSaved extends React.Component {
    render() {
        let Result = Calc.all(this.props.cards, this.props.addExtra);
        return (<div className="big-result">
            <div className="result-main single-result">
                <label>{this.props.addExtra ? "Paying a little more than required minimum total" : "Debt repayment using credit card minimums total"}</label>
                <span>{Format.usd(Result.total * 100, false)}</span>
            </div>
            <button className="view-report" onClick={() => this.props.report()}>View report</button>
            <div className="result-secondary">
                <div className="single-result">
                    <label>Time to Payoff</label>
                    <span>{Format.months(Result.payoff)}</span>
                </div>
                <div className="single-result">              
                    <label style={{ color: "#FF6200", fontSize: "x-large" }}>Interests Saved <FaRegQuestionCircle /></label>
                    <span style={{ color: "#FF6200" }}>{Format.usd(Result.interestPaid * 100)}</span>
                </div>
            </div>
            <div className="result-chart single-result">
                <label>Debt payoff is estimated at {Format.months(Result.payoff)}</label>
                <BalanceChart schedule={Result.schedule} />
            </div>
        </div>);
    }
}
export default BigResultsSaved;