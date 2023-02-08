import React from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    /* emailjs.sendForm('service_srddd2h', 'template_diq3ivy', event.target, 'pTggeyXlvywUQRo28')
      .then(response => console.log(response))
      .catch(error => console.log(error)) */
  }

  return (
    <section className='d-flex justify-content-center'>
      <form className='form-container' onSubmit={sendEmail}>
        <div className='input-container'>
          <label className='label'>NOMBRE</label>
          <input className='input' type="name" name='user-name'/>
        </div>
        <div className='input-container'>
          <label className='label'>E-MAIL</label>
          <input className='input' type="email" name='user-email'/>
        </div>
        <div className='input-container'>
          <label className='label'>TU MENSAJE</label>
          <textarea className='input' name='user-message' rows={8}/>
        </div>
        <button className='form-button' type='submit'>ENVIAR</button>
      </form>
    </section>
  )
}

export default Contact
