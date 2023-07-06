import React, { Component } from "react";
import Counter from "../../components/Counter";

export default class CountersPage extends Component {
  state = {
    total: 0,
  };

  counterChange = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Counter onChange={this.counterChange} />
          <Counter onChange={this.counterChange} />
          <Counter onChange={this.counterChange} />
        </div>
        <h3>Total: {this.state.total}</h3>
      </div>
    );
  }
}
