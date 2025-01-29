import react from 'react';
import logo from './logo.svg';
import './App.css';
/*
import Home from './home';
import About from './about';
import Users from './users';
import Contact from './contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
    <div>
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" ,backgroundColor: "pink",}}>
        
          <Link to = "/home">Home</Link>
          <Link to = "/users">Users</Link>
          <Link to = "/about">About</Link>
          <Link to = "/contact">Contact</Link>
      </nav>
      <Routes>
         <Route path="/home" element={<Home section="home" />} />
         <Route path="/users" element={<Users section="users"/>}/>
         <Route path="/about" element={<About section="about"/>}/>
         <Route path="/contact" element={<Contact section="contact"/>}/>
      </Routes>
    </div>
   </Router>
  );
}



import Formtoredux from './formtoredux';
import React from 'react'

const App = () => {
  return (
    <div>
      <Formtoredux />
    </div>
  )
}
*/


import React from 'react'
import { Newform } from './newform';

const App = () => {
  return (
    <div>
      <Newform />
    </div>
  )
}

export default App
