import React from 'react';
import Format from './helpers/format.js';
class CardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, drag: false };
    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.dragEndHandler = this.dragEndHandler.bind(this);
    this.dragHandler = this.dragHandler.bind(this);
    this.fakeChange = this.fakeChange.bind(this);
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
            draggable={this.props.type === 'bubble' ? true : false}
            onDragStart={this.dragStartHandler}
            onDrag={this.dragHandler}
            onDragEnd={this.dragEndHandler}
          />
          {this.props.type === 'bubble' &&

            <input type="range" step={step} min={min} max={max} value={this.props.value} name={this.props.name} onChange={this.props.onChange} />
          }
        </div>
      </div>
    );
  }
  dragStartHandler(e) {
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(img, 0, 0);
    this.setState({ drag: e.clientX });
  }
  dragEndHandler() {
    this.setState({ drag: false });
  }
  dragHandler(e) {
    if (this.state.drag === false) return;
    let diff = e.clientX - this.state.drag;
    if (diff % 20 === 0) {
      this.setState({ drag: e.clientX });
      let current = parseInt(e.target.value, 10);
      diff > 0 ? current++ : current--;
      this.fakeChange(current);
    }
  }
  fakeChange(val) {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: val.toString()
      }
    });
  }
}
export default CardInput;