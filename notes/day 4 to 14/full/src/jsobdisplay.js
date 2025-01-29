import React from 'react'

const jsobdisplay = () => {
var obj={
    number:100,
    name:"Vishal"
}
  return (
    <div>
      <h1>{obj.number}</h1>
      <h1>{obj.name}</h1>
    </div>
  )
}

export default jsobdisplay
