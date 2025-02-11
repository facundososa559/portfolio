import React from 'react'

function Input({label, type, name, value, onChange}) {
  return (
    <div>
        <label className='text--semi-bold'>{label}</label>
        <input className='input text--regular' type={type} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
