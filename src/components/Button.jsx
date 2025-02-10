import React from 'react'

function Button({content}) {
  return (
    <button className='button animation--fade-in-slow'>
      {content}
    </button>
  )
}

export default Button
