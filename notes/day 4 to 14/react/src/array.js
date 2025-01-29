import React, { useState } from "react";

function App() {
  const one = [1, 2, 5];
  const two = [13, 15, 16];
  
 
    const combinedArray = [...one,...two];
    console.log('One:',one);
    console.log('Two:',two);
    console.log('Combined Array:',combinedArray);
}
export default App;