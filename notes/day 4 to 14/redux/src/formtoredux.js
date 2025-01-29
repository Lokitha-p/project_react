import React, { useState } from 'react';

const Formtoredux = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
 
  function handleChange(e) {
    const { value, type } = e.target;
    if (type === 'text') {
      setName(value);
    } else if (type === 'number') {
      setAge(value);
    }
  }
  console.log(name)
  console.log(age) 
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />

      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={handleChange}
      />

      
    </div>
  );
};

export default Formtoredux;