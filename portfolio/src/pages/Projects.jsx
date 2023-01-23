import React from 'react'

function Projects() {
  return (
    <ul className='project-container text-center text-nowrap p-0 fs-4 fw-light position-absolute top-50 start-50 translate-middle'>
        <li className='list-group-item my-2'><a className='text-decoration-none text-black' href="https://openfresh.netlify.app/" target='_blank' rel='noreferrer'>OPENFRESH</a></li>
        <li className='list-group-item my-2'><a className='text-decoration-none text-black' href="https://facundososa.github.io/fernando-de-noronha/" target='_blank' rel='noreferrer'>FERNANDO DE NORONHA</a></li>
        <li className='list-group-item my-2'><a className='text-decoration-none text-black' href="https://facundososa.github.io/libreria-nomadas/?fbclid=IwAR0_juKxUPKoojB0DJ_WaUVWBPEXYeMvuxugJM97OfmgE08fxE-Ll4oPwIc" target='_blank' rel='noreferrer'>LIBRERÍA NÓMADAS</a></li>
    </ul>
  )
}

export default Projects