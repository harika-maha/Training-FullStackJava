import React, { useState } from "react";

const LogicalNot = () => {
  const [toggle, setToggle] = useState(true);

  function popUp() {
    setToggle(!toggle);
    alert("popUp activated!");
  }
  return (
    <>
      <button onClick={popUp}>Toggle State</button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle State
      </button>

      {/* Method 1 */}

      {/* {toggle && <h3>Button Toggled!</h3>} */}

      {/* Method 2 */}

      {toggle ? <h3>Button toggled!</h3> : null}
    </>
  );
};

export default LogicalNot;
