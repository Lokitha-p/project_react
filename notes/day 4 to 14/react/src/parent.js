import React from 'react'
import {Child} from './child'
const Parent = (props) => {
    const message = "HELLO ALL"
  return (
    <div>
      <h1> This is parent component </h1>
      <Child message={message} />
    </div>
  )
}

export default Parent
