import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <ul className='nav-links d-grid m-0 px-0 py-1'>
      <li className='nav-links list-group-item my-1'><Link to='/about' className='nav-link fs-5 fw-light'>ABOUT</Link></li>
      <li className='nav-links list-group-item my-1'><Link to='/projects' className='nav-link fs-5 fw-light'>PROJECTS</Link></li>
      <li className='nav-links list-group-item my-1'><Link to='/contact' className='nav-link fs-5 fw-light'>CONTACT</Link></li>
    </ul>
  )
}

export default NavBar