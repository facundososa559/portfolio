import React from 'react'
import emailjs from '@emailjs/browser'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_srddd2h', 'template_diq3ivy', event.target, 'pTggeyXlvywUQRo28')
  }

  return (
    <section className='d-flex flex-column align-items-center mt-5 mb-2'>
      <form className='form-container' onSubmit={sendEmail}>
        <div className='input-container'>
          <label className='label'>NAME</label>
          <input className='input' type="name" name='user-name'/>
        </div>
        <div className='input-container'>
          <label className='label'>E-MAIL</label>
          <input className='input' type="email" name='user-email'/>
        </div>
        <div className='input-container'>
          <label className='label'>YOUR MESSAGE</label>
          <textarea className='input' name='user-message' rows={8}/>
        </div>
        <button className='form-button' type='submit'>SEND</button>
      </form>

      <ul className='d-flex p-0 mt-5 mb-3'>
        <li className='list-group-item mx-1'><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'><img src={linkedin} alt="linkedin.svg" /></a></li>
        <li className='list-group-item mx-1'><a href="https://www.instagram.com/facudev.uy/" target="_blank" rel='noreferrer'><img src={instagram} alt="instagram.svg" /></a></li>
        <li className='list-group-item mx-1'><a href="https://github.com/FacundoSosa" target="_blank" rel='noreferrer'><img src={github} alt="github.svg" /></a></li>
      </ul>
    </section>
  )
}

export default Contact
