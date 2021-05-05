import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const {
      onDelete,
      counters,
      onReset,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
