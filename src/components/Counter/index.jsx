import React, { Component } from "react";

import Style from "./style.module.css";

export default class Counter extends Component {
  state = { counter: 0 };

  doIncrement = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => {
        this.props.onChange(1);
      }
    );
  };

  doDecrement = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter - 1,
      }),
      () => {
        this.props.onChange(-1);
      }
    );
  };

  render() {
    return (
      <div className={Style.counter}>
        <button className={Style.decrement} onClick={this.doDecrement}>
          -
        </button>
        <p className={Style.count}>{this.state.counter}</p>
        <button className={Style.increment} onClick={this.doIncrement}>
          +
        </button>
      </div>
    );
  }
}
