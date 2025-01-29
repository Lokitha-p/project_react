import React, { useState } from 'react'

const Form1 = () => {
    const[name,uname] = useState('');
    function handlechange(event){
        uname(event.target.value);
    }
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" value={name} onChange={handlechange}></input>
        <h1>Your name is:{name}</h1>
      </form>
    </div>
  )
}

export default Form1
