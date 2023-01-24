import React from 'react'

function Home() {
  return (
    <div className='d-flex flex-column align-items-center my-3'>
      <div className='portada my-4 mx-1 mb-5'></div>
      <div className='container r w-100 justify-content-evenly'>
        <div className='row'>
          <h1 className='home-titles text-end col-md-6'>FRONTEND DEVELOPER.</h1>
          <h1 className='home-titles text-end col-md-6'>CLOUD PRACTITIONER.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home