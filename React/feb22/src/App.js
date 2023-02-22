import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };
  }

  changeA = () => {
    this.setState({ a: 2 });
  };
  changeB = () => {
    this.setState({ b: 3 });
  };
  changeC = () => {
    this.setState({ c: 4 });
  };
  changeD = () => {
    this.setState({ d: 5 });
  };
  render() {
    var sum = this.state.a + this.state.b + this.state.c + this.state.d;
    return (
      <>
        <h1>SUM: {sum}</h1>
        <button onClick={this.changeA}>Change A</button>
        <button onClick={this.changeB}>Change B</button>
        <button onClick={this.changeC}>Change C</button>
        <button onClick={this.changeD}>Change D</button>
      </>
    );
  }
}
