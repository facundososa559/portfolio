import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import menuIcon from '../assets/menu-icon.svg'

function NavBar() {
  const location = useLocation();

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <nav className='text-end'>
      <button onClick={handleOpen} className='btn border-0 p-0'><img src={menuIcon} alt="menu-icon.svg" /></button>
      <div className='line position-absolute end-0'></div>
      {open === true &&
      <TransitionGroup>
        <CSSTransition key={location.pathname} className='position-static' classNames="fade" timeout={1000}>
          <div className='w-100 nav-links-enter' location={location}>
            <ul className='d-grid m-0 px-0 py-1'>
              <li className='list-group-item'><Link to='/about' className='nav-link fs-5 fw-light'>About</Link></li>
              <li className='list-group-item'><Link to='/projects' className='nav-link fs-5 fw-light'>Projects</Link></li>
              <li className='list-group-item'><Link to='/contact' className='nav-link fs-5 fw-light'>Contact</Link></li>
            </ul>
            <div className='line position-absolute end-0'></div>
          </div>
        </CSSTransition>
      </TransitionGroup>}
     </nav>
  )
}

export default NavBar