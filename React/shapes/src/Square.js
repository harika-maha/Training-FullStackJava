import React from "react";

class Square extends React.Component {
  render() {
    const sideLength = this.props.sideLength;
    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;
    return (
      <div>
        <p>Side Length: {sideLength}</p>
        <p>Area: {area}</p>
        <p>Perimeter: {perimeter}</p>
      </div>
    );
  }
}
export default Square;
