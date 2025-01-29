import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './slices/userslice';
const Home = () => {
  const dispatch=useDispatch()
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    function handlechange(e){
      const{name,value}=e.target;
      setName((curr)=>{
        return{
          ...curr,
          [name]: value
        };
      });
        console.log(name,value);

        const add = (event)=>{
          event.preventDefault();

          dispatch(addUser(Formdata));
        }
    }
  return (
    <div>
      <section className="home">
        <h1>Home</h1>
        <p>Welcome to my Page.</p>
        <img
          src="https://wallpaperaccess.com/full/3214373.jpg"
          alt="Home"
          style={{ width: '350px', height: '250px', objectFit: 'cover' }}
        />
        <br></br>
        <label>Name</label>
        <br></br>
        <input type='text' value={name.name} onChange={handlechange}></input>
        <br></br>
        <label>Age</label>
        <br></br>
        <input type='number' value={age.age} onChange={handlechange}></input>
        <br></br>
        <button>ADD</button>

      </section>
    </div>
  );
};

export default Home;
