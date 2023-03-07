import React, { useState } from "react";

export default function HelloCounter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Counter: {count}</button>
    </div>
  );
}
