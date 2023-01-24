import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const nodeRef = useRef(null);
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='nav-wrapper'>
      <button onClick={handleOpen} className='header-button btn border-0 p-0 pt-1 w-min-content h-min-content'>
        <span className='header-button__dot'></span>
        <span className='header-button__dot'></span>
        <span className='header-button__dot'></span>
      </button>

      <nav className='nav-container text-end'>
        <ul className='nav-desktop m-0 px-0 py-1'>
          <li className='nav-links my-1'><Link to='/' className='nav-link fs-5 fw-light'>HOME</Link></li>
          <li className='nav-links my-1'><Link to='/about' className='nav-link fs-5 fw-light'>ABOUT</Link></li>
          <li className='nav-links my-1'><Link to='/projects' className='nav-link fs-5 fw-light'>PROJECTS</Link></li>
          <li className='nav-links my-1'><Link to='/contact' className='nav-link fs-5 fw-light'>CONTACT</Link></li>
        </ul>

      {open === true && 
        <ul ref={nodeRef} className='nav-mobile m-0 px-0 py-1'>
          <li className='nav-links my-1'><Link to='/' className='nav-link fs-5 fw-light'>HOME</Link></li>
          <li className='nav-links my-1'><Link to='/about' className='nav-link fs-5 fw-light'>ABOUT</Link></li>
          <li className='nav-links my-1'><Link to='/projects' className='nav-link fs-5 fw-light'>PROJECTS</Link></li>
          <li className='nav-links my-1'><Link to='/contact' className='nav-link fs-5 fw-light'>CONTACT</Link></li>
        </ul>}     
      </nav>
    </div>
  )
}

export default NavBar