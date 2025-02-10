import React from 'react'

function Input({label, type, name}) {
  return (
    <div>
        <label className='text--semi-bold'>{label}</label>
        <input className='input text--regular' type={type} name={name}/>
    </div>
  )
}

export default Input
