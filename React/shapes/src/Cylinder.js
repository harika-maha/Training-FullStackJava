import React from "react";

class Cylinder extends React.Component {
  render() {
    const PI = 3.14;
    const radius = this.props.radius;
    const height = this.props.height;
    const lateralArea = 2 * PI * radius * height;
    const volume = PI * radius * radius * height;
    return (
      <div>
        <p>Radius: {radius}</p>
        <p>Lateral Area: {lateralArea}</p>
        <p>Volume: {volume}</p>
      </div>
    );
  }
}
export default Cylinder;
