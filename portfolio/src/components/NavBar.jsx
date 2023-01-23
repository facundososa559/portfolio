import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-100'>
      <div className='line'></div>
      <nav>
        <ul className='d-flex flex-wrap justify-content-center m-0 px-0 py-2 w-100'>
            <li className='list-group-item mx-5 px-2'><Link to='/about' className='nav-link fs-5 fw-light'>About</Link></li>
            <li className='list-group-item mx-5 px-2'><Link to='/projects' className='nav-link fs-5 fw-light'>Projects</Link></li>
            <li className='list-group-item mx-5 px-2'><Link to='/contact' className='nav-link fs-5 fw-light'>Contact</Link></li>
        </ul>
     </nav>
     <div className='line'></div>
    </div>
  )
}

export default NavBar