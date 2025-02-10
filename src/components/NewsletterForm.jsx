import React from 'react'
import emailjs from '@emailjs/browser'
import Input from './Input'
import Button from './Button';

function NewsletterForm() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_srddd2h', 'template_diq3ivy', event.target, 'pTggeyXlvywUQRo28')
  }

  return (
      <form id='newsletter' className='newsletter-form container--flex container--column' onSubmit={sendEmail}>
        <Input
          label={"Nombre*"}
          type={"name"}
          name={"user-name"}
        />
        <Input
          label={"E-mail*"}
          type={"email"}
          name={"user-email"}
        />
        <div className='container--flex container--center container--fill-x'>
          <Button content="Suscribirse a Newsletter"/>
        </div>
      </form>
  )
}

export default NewsletterForm
