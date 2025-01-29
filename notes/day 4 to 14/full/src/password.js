import React from 'react'

export const Password = () => {


    var password = "lokiboo!"
    
    function check(){
        var userpass = prompt("Enter your password")
    if(password==userpass){
        return (10)
        
    }
    else{
        return (11)
    }
}

  return (
    <div>
      <button onClick={check}>Click me</button>
      
    </div>
  )
}