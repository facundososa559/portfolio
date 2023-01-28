import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header-container pb-2'>
      <Link to='/' className='header-titles_container nav-link'>
        <h1 className='header-title mb-0'>FACU SOSA</h1>
        <h1 className='header-subtitle mb-0'>Believe & Create</h1>
      </Link>    
      <NavBar />      
    </header>
  )
}

export default Header