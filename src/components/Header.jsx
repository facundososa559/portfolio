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
    <header className='header-container py-2 px-3 sticky-top'>
      <h1 className='w-min-content m-0'><Link to='/' className='nav-link fs-1 fw-normal'>FACU SOSA</Link></h1>
      <button onClick={handleOpen} className='btn border-0 p-0 w-min-content'><img src={menuIcon} alt="menu-icon.svg" /></button>
      <nav className='nav-container text-end'>
        {open === true && <NavBar />}
      </nav>
    </header>
  )
}

export default Header