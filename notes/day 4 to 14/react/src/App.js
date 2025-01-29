import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import Cart from './Cart';
//import ProductList from './Product';
//import { Timer } from './useeffect-1';
//import Parent, { Parent1, ParentComponent } from './parent1';
//import { Child } from './child';
//import { Message } from './message';

//import Array from './array'
/*
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import { Home } from './Home';
import { About } from './about';
import Content from './Content';
function App() {
  return(
    <Router>
     <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/content">Content</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/content" Component={Content} />
      </Routes>
     </div>
    </Router>
  
  );
}
  */







import { Timer } from './useeffect-1';
function App(){
  return(
    <div>
      <Timer />
    </div>
  )
}
export default App;
