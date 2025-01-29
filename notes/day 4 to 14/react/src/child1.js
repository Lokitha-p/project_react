import React, { useState } from "react";

const ChildComponent = (props) => {
  const [child_message, setChildMessage] = useState("Hello from child");

  const send_message = () => {
    props.data_from_parent_from_child(child_message); 
  };

  return (
    <div>
      <h1>Child Component!</h1>
      <p>Data from Parent: {props.msg}</p>
      <button onClick={send_message}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent; 
