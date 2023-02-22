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
  initialA = 1;
  initialB = 2;
  initialC = 3;
  initialD = 4;
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
    var sum = this.initialA + this.initialB + this.initialC + this.initialD;
    var sumAChanged =
      this.state.a + this.initialB + this.initialC + this.initialD;
    var sumBChanged =
      this.initialA + this.state.b + this.initialC + this.initialD;
    var sumCChanged =
      this.initialA + this.initialB + this.state.c + this.initialD;
    var sumDChanged =
      this.initialA + this.initialB + this.initialC + this.state.d;
    var sumAllChanged =
      this.state.a + this.state.b + this.state.c + this.state.d;
    return (
      <>
        <h1>SUM: {sum}</h1>
        <button onClick={this.changeA}>Change A</button>
        <h1>Sum with A changed: {sumAChanged}</h1>
        <hr></hr>
        <button onClick={this.changeB}>Change B</button>
        <h1>Sum with B changed: {sumBChanged}</h1>
        <hr></hr>
        <button onClick={this.changeC}>Change C</button>
        <h1>Sum with C changed: {sumCChanged}</h1>
        <hr></hr>
        <button onClick={this.changeD}>Change D</button>
        <h1>Sum with D changed: {sumDChanged}</h1>
        <hr></hr>
        <h1>Sum with current states: {sumAllChanged}</h1>
      </>
    );
  }
}
