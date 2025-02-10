import React from 'react'
import Accordion from '../Accordion'



function Project({title, description, type, images = {}, link}) {
  return (   
    <Accordion 
      header={
        <div className='project__header container--flex container--column'>
          <h2 className='subheading--small medium'>{title}</h2>
          <p className='project__description'>{description}</p>
          <span className='project__type'>{type}</span>
        </div>
      }
      type={"image"}
      images={{
        mobile: images.mobile,
        tablet: images.tablet,
        desktop: images.desktop
      }}
      link={link}
    />
  )
}

export default Project
