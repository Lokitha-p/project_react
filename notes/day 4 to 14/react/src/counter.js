import React, { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(count-1);
    };
    return (
        <div>
            <h1> Counter: {count} </h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}
export default Counter