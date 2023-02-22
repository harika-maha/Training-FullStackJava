import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 4,
      number2: 5,
    };
  }

  forceUpdate() {
    console.log("forceUpdate");
    this.setState({ number: 99 });
  }
  componentDidMount() {
    console.log("Lifecycle is mounted" + this.state.number1);
  }
  static getDerivedStateFromProps(props) {
    console.log(props.a);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevstate" + prevState.number1);
    console.log("prevprops" + prevProps.a);
  }
  componentDidUpdate() {
    console.log(this.state.number1);
  }
  componentWillUnmount() {
    console.log("Images Unmount");
  }
  changeNum = () => {
    this.setState({ number1: 44 });
  };
  render() {
    // this.forceUpdate();
    return (
      <div>
        <button onClick={this.changeNum}>click</button>
        <h1>{this.state.number1 + this.state.number2}</h1>
      </div>
    );
  }
}
export default Lifecycle;
