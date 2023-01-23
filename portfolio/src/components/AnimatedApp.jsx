import React from 'react'
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import { Route, Routes } from 'react-router-dom';

function AnimatedApp({ location }) {
  return (
    <main>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default AnimatedApp