import React from 'react'

const AiSquare = (props) => {
  return (
    <div className='ai-square' {...props} >
     {props.x ? 'x' : (props.o ? 'o' : '')}
    </div>
  )
}

export default AiSquare

