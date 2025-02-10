import React from 'react'
import Button from '../components/Button'

function CallToAction() {
  return (
    <div className='call-to-action container--flex container--wrap container--center'>
        <Button content={"Agendemos reunión por e-mail"} />
        <Button content={"Agendemos reunión por whatsapp"} />
    </div>
  )
}

export default CallToAction
