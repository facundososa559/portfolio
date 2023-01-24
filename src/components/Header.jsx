import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header-container pt-4 pb-2'>
      <Link to='/' className='nav-link'>
        <h1 className='header-title mb-0 text-wrap'>FACU SOSA</h1>
        <h1 className='header-subtitle mb-0 text-wrap'>Believe & Create</h1>
      </Link>    
      <NavBar />      
    </header>
  )
}

export default Header