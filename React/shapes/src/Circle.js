import React from "react";

class Circle extends React.Component {
  render() {
    const PI = 3.14;
    const radius = this.props.radius;
    const area = PI * radius * radius;
    const perimeter = 2 * PI * radius;
    const diameter = 2 * radius;
    return (
      <div>
        <p>Radius: {radius}</p>
        <p>Diameter: {diameter}</p>
        <p>Area: {area}</p>
        <p>Perimeter: {perimeter}</p>
      </div>
    );
  }
}
export default Circle;
