import React from "react";
import Format from "./helpers/format.js";
class Additionally extends React.Component {
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
                value = this.state.editing
                    ? (value / 100).toFixed(2)
                    : Format.usd(value);
                break;
            case "bubble":
                value = this.state.editing ? value : Format.percent(value);
                break;
            default:
                break;
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
                        draggable={this.props.type === "bubble" ? true : false}
                        onDragStart={this.dragStartHandler}
                        onDrag={this.dragHandler}
                        onDragEnd={this.dragEndHandler}
                    />
                    {this.props.type === "bubble" && (
                        <input
                            type="range"
                            step="1"
                            min="0"
                            max={this.props.name === "rate" ? 36 : 20}
                            value={parseInt(value, 10)}
                            name={this.props.name}
                            onChange={this.props.onChange}
                        />
                    )}
                </div>
            </div>
        );
    }
    dragStartHandler(e) {
        var img = new Image();
        img.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
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
            console.log(diff);
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
export default Additionally;
