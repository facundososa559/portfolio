import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/menu-icon.svg'

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className='header-container pt-4 pb-2 px-3 sticky-top'>
      <Link to='/' className='nav-link'>
        <h1 className='mb-1 fs-1'>FACU SOSA</h1>
        <h6 className='header-subtitle fw-light m-0 text-center'>· Believe & Create ·</h6>
      </Link>
      <button onClick={handleOpen} className='btn border-0 p-0 w-min-content'><img src={menuIcon} alt="menu-icon.svg" /></button>
      <nav className='nav-container text-end'>
        {open === true && <NavBar />}
      </nav>
    </header>
  )
}

export default Header