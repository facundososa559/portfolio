import React from 'react'

function NavBar() {
  return (
      <nav className='nav-container text-end'>
        <ul className='navbar container--flex'>
          <li><a href="#projects" className='navbar__link'>PROYECTOS</a></li>
          <li><a href="#faq" className='navbar__link'>FAQ</a></li>
          <li><a href="#contact">CONTACTO</a></li>
        </ul>
      </nav>
  )
}

export default NavBar