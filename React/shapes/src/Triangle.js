import React from "react";

class Square extends React.Component {
  render() {
    const height = this.props.height;
    const base = this.props.base;
    const area = height * base;
    return (
      <div>
        <p>Base Length: {base}</p>
        <p>Area: {area}</p>
        {/* <p>Perimeter: {perimeter}</p> */}
      </div>
    );
  }
}
export default Square;
