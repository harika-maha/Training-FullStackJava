import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";
import Triangle from "./Triangle";
import Circle from "./Circle";
import Cylinder from "./Cylinder";
import Cone from "./Cone";
function App() {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Square</p>
      <Square sideLength={5} />
      <hr></hr>
      <p style={{ fontWeight: "bold" }}>Triangle</p>
      <Triangle height={10} base={5} />
      <hr></hr>
      <p style={{ fontWeight: "bold" }}>Circle</p>
      <Circle radius={5} />
      <hr></hr>
      <p style={{ fontWeight: "bold" }}>Cyclinder</p>
      <Cylinder radius={5} height={10} />
      <hr></hr>
      <p style={{ fontWeight: "bold" }}>Cone</p>
      <Cone radius={5} height={10} />
    </div>
  );
}

export default App;
