import React from "react";

class Cone extends React.Component {
  render() {
    const PI = 3.14;
    const radius = this.props.radius;
    const height = this.props.height;
    const volume = (1 / 3) * PI * radius * radius * height;
    return (
      <div>
        <p>Volume: {volume}</p>
      </div>
    );
  }
}
export default Cone;
