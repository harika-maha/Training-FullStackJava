import React, { useState } from "react";
import "./pdtpage.css";

const ProductPage = () => {
  // Use the `useState` hook to create a `quantity` state variable with an initial value of 1.
  const [quantity, setQuantity] = useState(1);

  // Define the price as a constant.
  const price = 9.99;

  // Define a function to handle changes to the quantity input field.
  const handleQuantityChange = (event) => {
    // Use the `setQuantity` function to update the `quantity` state variable with the new value.
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      <h1>Product Name</h1>
      <p>Price: ${price}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <p>Total Price: ${price * quantity}</p>
    </div>
  );
};

export default ProductPage;
