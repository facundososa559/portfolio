import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [open, setOpen] = useState(false)
 
  const navList = [
    {id: 1, link: 'HOME', route: '/'},
    {id: 2, link: 'ABOUT', route: '/about'},
    {id: 3, link: 'PROJECTS', route: '/projects'},
    {id: 4, link: 'CONTACT', route: '/contact'}
  ]

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
          {navList.map(item => {
            return (
              <li key={item.id} className='nav-links my-1'>
                <Link to={item.route} className='nav-link fs-5 fw-light d-flex'>
                  {item.link.split('').map(letter => {
                    return <span>{letter}</span>; 
                  })}
                </Link>
              </li>
            )
          })}
        </ul>

        {open === true &&
          <ul className= 'nav-mobile m-0 px-0 py-1'>
            {navList.map(item => {
            return (
              <li key={item.id} className='nav-links my-1'>
                <Link to={item.route} className='nav-link fs-5 fw-light d-flex justify-content-end'>
                  {item.link.split('').map(letter => {
                      return <span>{letter}</span>; 
                    })}
                </Link>
              </li>
            )
            })}
          </ul>}
      </nav>
    </div>
  )
}

export default NavBar