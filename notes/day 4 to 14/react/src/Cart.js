

import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Items in Cart:</h2>
      
        {cart.length === 0 ? (
          <li>No items in the cart.</li>
        ) : (
          cart.map((item, index) => <li key={index}>{item}</li>)
        )}
      
    </div>
  );
};

export default Cart;