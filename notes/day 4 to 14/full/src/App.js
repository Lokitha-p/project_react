/*
import logo from './logo.svg';
import './App.css';
import React,{createContext, useState} from 'react';
//import { Container } from './container';
export const themeContext = createContext();

const App = () => {
  const [theme,setTheme] = useState("light");
  const [style,setStyle] = useState({backgroundColor:'pink',color:'black'})
  const ToggleTheme = () => {
    setTheme((curr)=>(curr==="light"?"dark":"light"))
  }
  return (
    
    <div>
      <themeContext.Provider value={{theme,style}}>
      <h1 style={style}> App Component</h1>
      <h1>Theme : {theme} </h1>
      <button onClick={ToggleTheme}>onClick</button>
      <Container theme={theme}/>
      </themeContext.Provider>
      </div>
  );
}
*/
//import React from 'react';
//import { Clock } from './clock';
//import { Usereducer } from './usereducer';
//import { Usereducer } from './usereducer';
//import { Usereducer2 } from './usereducer2';
//import { Usereducer3 } from './usereducer3';
//import { Colors } from './colors';
//export const App = () => {
 // return (
 //   <div>
      
   //   <Colors />
    //</div>
  //);
//};

//export default App;

/*
import "./style.css"
import Stylecomponent from "./stylecomponent"
const App = () => {
  return (
    <div>
 
<h1 class ="app-name">MY APP
<h2 class = "second">second line</h2></h1>
<h1 class="app-name">MY APP
<h2 class = "second">second line</h2>


</h1>
<h2 class="select"> stylecomponent</h2>
<Stylecomponent/>
    </div>
  )
}
*/
/*

import React, { useState } from 'react';
//import Granted from './granted';
//import Denied from './denied';
import Form1 from './form1';

function PasswordInput() {
    const [isSame, setisSame] = useState(null);
    const password = "lokiboo";

    const handleCheckPassword = () => {
        const input = prompt("Enter the password");
        if (input === password) {
            setisSame(true);
        } else {
            setisSame(false); 
        }
    };

    return (
        <div>
            <button onClick={handleCheckPassword}>Enter Password</button>
            {isSame === true && <Granted />} 
            {isSame === false && <Denied />}
        </div>
    );
}
    */


import React from 'react'
import Form1 from './form1';
const App = () => {
  return (
    <div>
      <Form1 />
    </div>
  )
}

export default App


