import React from 'react'
import Project from '../Projects/Project'

/* PROJECTS IMAGES */

/* CUPTI */
import cuptiImageDesktop from "../../assets/projects/cupti/hero-cupti-desktop.png"
import cuptiImageTablet from "../../assets/projects/cupti/hero-cupti-tablet.png"
import cuptiImageMobile from "../../assets/projects/cupti/hero-cupti-mobile.png"

/* ACTIVE SPORT */
import activeImageDesktop from "../../assets/projects/active-sports/active-sports-hero-desktop.png"
import activeImageMobile from "../../assets/projects/active-sports/active-sports-hero-mobile.png"
import activeImageTablet from "../../assets/projects/active-sports/active-sports-hero-tablet.png"

/* URBAN ZONE */
import urbanImageDesktop from "../../assets/projects/urban-zone/urban-zone-hero-desktop.png"
import urbanImageMobile from "../../assets/projects/urban-zone/urban-zone-hero-mobile.png"
import urbanImageTablet from "../../assets/projects/urban-zone/urban-zone-hero-tablet.png"

function ProjectsContainer() {
  return (
    <ul className='projects container--flex container--column'>
        <Project 
          title={"CUPTI Ingeniería"}
          description={"CUPTI es una empresa de ingeniería que está buscando cambiar toda su imagen empresarial. Actualmente estoy trabajando en este proyecto."}
          type={"DISEÑO WEB"}
          images={{
            mobile: cuptiImageMobile,
            tablet: cuptiImageTablet,
            desktop: cuptiImageDesktop
          }}
        />

        <Project 
          title={"Active Sports"}
          description={"Active Sports es una marca dedicada a vender suplementos deportivos que necesita un sitio a donde dirigir sus seguidores para aumentar sus ventas."}
          type={"DISEÑO WEB"}
          images={{
            mobile: activeImageMobile,
            tablet: activeImageTablet,
            desktop: activeImageDesktop
          }}
        />
        
        <Project 
          title={"Urban Zone"}
          description={"Urban Zone es un proyecto personal donde busqué fusionar una estética punk con una estética urbana."}
          type={"DISEÑO WEB"}
          images={{
            mobile: urbanImageMobile,
            tablet: urbanImageTablet,
            desktop: urbanImageDesktop
          }}
        />
    </ul>
  )
}

export default ProjectsContainer
