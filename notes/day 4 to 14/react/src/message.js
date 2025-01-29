import React, { useState } from "react";

export const Message = () => {
    const [message1, setMessage1] = useState('Click the first button to see a message');
    const [message2, setMessage2] = useState('Click the second button to see a message');

    const handleClick1 = () => {
        setMessage1('Hello, you clicked the first button!');
    };

    const handleClick2 = () => {
        setMessage2('Hello, you clicked the second button!');
    };

    return (
        <div>
            <h1>{message1}</h1>
            <button onClick={handleClick1}>Button 1</button>
            <h1>{message2}</h1>
            <button onClick={handleClick2}>Button 2</button>
        </div>
    );
};
