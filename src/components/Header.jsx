import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header-container pt-3 px-3 sticky-top'>
        <h1 className='m-0'><Link to='/' className='nav-link fs-1 fw-normal'>FACU SOSA</Link></h1>
        <NavBar/>
    </header>
  )
}

export default Header