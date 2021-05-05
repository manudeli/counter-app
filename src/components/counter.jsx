import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Ajax call and get new data from the server");
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col">{this.props.children}</div>
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            ＋
          </button>
          <button
            disabled={this.props.counter.value <= 0}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            －
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm m-2"
          >
            🗑️
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-primary m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
