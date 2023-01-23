import React from 'react'

function Contact() {
  return (
    <div className='contact-container d-flex flex-column align-items-center fs-4 fw-light position-absolute top-50 start-50 translate-middle'>
        <span>facundososa676@gmail.com</span>
        <ul className='d-flex ps-0'>
          <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-3' href="https://www.linkedin.com/in/facundososa676/" target='_blank' rel='noreferrer'>LINKEDIN</a></li>
          <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-3' href="https://www.facebook.com/profile.php?id=100086093425316" target='_blank' rel='noreferrer'>FACEBOOK</a></li>
        </ul>
    </div>
  )
}

export default Contact