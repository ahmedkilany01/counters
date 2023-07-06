import React, { Component } from "react";
import Counter from "../../components/Counter";

import Style from "./style.module.css";

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
        <h3 className={Style.total}>Total: {this.state.total}</h3>
      </div>
    );
  }
}
