import React from 'react'

function Button({content, onClick, disabled}) {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

export default Button
