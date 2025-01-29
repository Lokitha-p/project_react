import React, { useState } from "react";
import ChildComponent from "./child1";

export const ParentComponent = () => {
  const p_message = "Hello from parent"; 
  const [child_message, setChildMessage] = useState("HAI");

  const datafromchild = (message) => {
    setChildMessage(message);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Parent: {p_message}</p>
      <p>Data from Child: {child_message}</p>
      <ChildComponent msg={p_message} data_from_parent_from_child={datafromchild} />
    </div>
  );
};
