import React from 'react'
import { Users } from './users'

export const Container = ({theme}) => {
  return (
    <div>
      <h1> Container</h1>
      <Users theme={theme} />
    </div>
  )
}


