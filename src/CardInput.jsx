import React from 'react';
import Format from './helpers/format.js';
class CardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, drag: false };
  }
  render() {
    let value = this.props.value;
    switch (this.props.type) {
      case "big":
        value = this.state.editing ? (value / 100).toFixed(2) : Format.usd(value);
        break;
      case "bubble":
        if (this.props.name === 'extra')
          value = this.state.editing ? (value / 100).toFixed(2) : Format.usd(value, false);
        else if (this.props.name === 'rate')
          value = this.state.editing ? (value / 100).toFixed(2) : Format.percent(value, 'rate');
        else
          value = this.state.editing ? value : Format.percent(value);
        break;
      default: break;
    }
    let min = 0, max = 0, step = 1;
    switch (this.props.name) {
      case "extra":
        max = 100000;
        step = 1;
        break;
      case "rate":
        max = 36;
        break;
      case "minimum":
        max = 20;
        break;
      default: break;
    }

    return (
      <div className={"card-header-input " + this.props.type}>
        <label>{this.props.label}</label>
        <div className="input-wrapper">
          <input
            type="text"
            name={this.props.name}
            value={value}
            onChange={this.props.onChange}
            onFocus={() => this.setState({ editing: true })}
            onBlur={() => this.setState({ editing: false })}
          />
          {this.props.type === 'bubble' && this.props.slider === true &&

            <input type="range" step={step} min={min} max={max} value={this.props.value} name={this.props.name} onChange={this.props.onChange} />
          }
        </div>
      </div>
    );
  }
}
export default CardInput;