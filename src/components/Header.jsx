import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className='header-container pt-4 pb-2'>
      <Link to='/' className='nav-link'>
        <h1 className='header-title mb-0'>FACU SOSA</h1>
        <h1 className='header-subtitle mb-0'>Believe & Create</h1>
      </Link>          
        <button onClick={handleOpen} className='header-button btn border-0 p-0 pt-1 w-min-content h-min-content'>
          <span className='header-button__dot'></span>
          <span className='header-button__dot'></span>
          <span className='header-button__dot'></span>
        </button>
      <nav className='nav-container text-end'>
        {open === true && <NavBar />}
      </nav>
    </header>
  )
}

export default Header