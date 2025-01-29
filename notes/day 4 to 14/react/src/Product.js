

import React from "react";

const ProductList = ({ addToCart }) => {
  const products = ["Laptop", "Smartphone", "Headphones"]; 

  return (
    <div>
      <h2>Product List</h2>
      
        {products.map((product, index) => (
          <li key={index}>
            {product}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      
    </div>
  );
};

export default ProductList;