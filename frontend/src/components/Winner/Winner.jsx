import React from 'react'

const Winner = ({message, color}) => {
    console.log(message)
  return (
    <div className={`result ${color}`}>
        <h3>{message}</h3>
    </div>
  )
}

export default Winner