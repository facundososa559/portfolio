import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='mt-3'>
        <h1><Link to='/' className='nav-link fs-1 fw-normal text-center'>FACU SOSA</Link></h1>
        <NavBar/>
    </header>
  )
}

export default Header