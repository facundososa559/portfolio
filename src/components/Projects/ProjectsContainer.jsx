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
          title={"Active Sports"}
          description={"Diseño web realizado para una marca dedicada a vender suplementos deportivos"}
          type={"DISEÑO WEB"}
          images={{
            mobile: activeImageMobile,
            tablet: activeImageTablet,
            desktop: activeImageDesktop
          }}
          link="https://www.instagram.com/activesport.suplementos/"
        />
        <Project 
          title={"Urban Zone"}
          description={"Diseño web realizado para estudio de grabación de música urbana"}
          type={"DISEÑO WEB"}
          images={{
            mobile: urbanImageMobile,
            tablet: urbanImageTablet,
            desktop: urbanImageDesktop
          }}
        />
        <Project 
          title={"CUPTI Ingeniería"}
          description={"Proyecto web realizado para empresa dedicada a brindar soluciones en energías renovables, eficiencia energética y diseño industrial"}
          type={"DISEÑO WEB"}
          images={{
            mobile: cuptiImageMobile,
            tablet: cuptiImageTablet,
            desktop: cuptiImageDesktop
          }}
        />
    </ul>
  )
}

export default ProjectsContainer
