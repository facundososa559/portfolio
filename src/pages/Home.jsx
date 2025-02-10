import React from 'react'
import NewsletterForm from '../components/NewsletterForm'
import Accordion from '../components/Accordion'
import CallToAction from '../components/CallToAction'
import NavBar from '../components/NavBar'
import ProjectsContainer from '../components/Projects/ProjectsContainer'

function Home() {
  return (
    <div className='container--flex container--column'>
      {/* ======== HEADER ========== */}
      <header className='header container--flex container--column'>
      <div className='header__container container--flex container--fill-x container--between animation--show-from-top'>
        <h1 className='header-title'>FACU SOSA</h1>  
        <NavBar />  
      </div>
        {/* ======== HERO ========== */}
        <section className='hero container--small container--flex container--center'>
          <div className='hero__container container--flex container--column text--align-center'>
            <h1 className='text--small extra-light letter-spacing'>FACU SOSA</h1>
            <h1 className='heading semi-bold'>Transformo visitas en clientes que generan dinero.</h1>
            <p>Dirijo tu tráfico a un sitio web para convertirlos en clientes reales. Te ayudo a entender tu embudo de ventas y construyo el lugar donde vas a vender tus productos y servicios.</p>
            <p>Podemos agendar una reunión de 15 minutos donde te doy una consultoría gratis en la que te explico como mejorar tu proceso de ventas, y empezamos a construir tu proyecto.</p>
            <CallToAction />
          </div>
        </section>     
      </header>

      <main className='main-content container--flex container--column'>
        {/* ======== PROJECTS ========== */}
        <section id='projects' className='container'>
          <ProjectsContainer />
        </section>

        {/* ======== FAQ ========== */}
        <section id='faq' className='container faq'>
        <h4 className='subheading semi-bold'>Preguntas Frecuentes</h4>
          <Accordion 
                header={<h1 className='regular'>¿Esto es una consultoría de marketing o un servicio completo?</h1>} 
                content={"Esto es un servicio de diseño y desarrollo web. Pero me gusta darle a mis clientes el contexto necesario para que puedan entender lo que están haciendo con su negocio. Conmigo vas a obtener herramientas de marketing y branding gratuitas que te ayudarán a entender donde está parado tu negocio, y si es necesario construyo un sitio web que te ayude a convertir tu tráfico en clientes."}
          />
          <Accordion 
              header={<h1 className='regular'>¿Cómo es el proceso de creación y cómo vamos a trabajar?</h1>} 
              content={"Primero hago un diagnóstico donde evalúo tu negocio y lo que necesitas. Planificamos una estrategia acorde a tus objetivos y comienzo a construir tu sitio web optimizado para convertir tráfico en clientes. Subimos tu web y te asesoro sobre como sacarle el máximo partido."}
          />
          <Accordion 
              header={<h1 className='regular'>Una vez que terminamos el proyecto, ¿Cómo seguimos?</h1>} 
              content={"Voy a enseñarte estrategias para que puedas dirigir tráfico hacia ella. Vas a aprender a utilizar los datos arrojados para que puedas mejorar aún más tu propuesta y te voy a enseñar pasos simples para medir la conversión y encontrar puntos para seguir haciendo crecer tu negocio y tus resultados."}
          />
          <Accordion 
              header={<h1 className='regular'>¿Qué rol cumple mi sitio web en mi negocio?</h1>} 
              content={"Seguramente ya cuentes con tráfico generado a través de redes sociales o haciendo marketing tradicional. Un sitio web te permite dirigir ese tráfico a un lugar que te permite medir el interés de esos clientes potenciales y aumentar la confianza en tus productos o servicios."}
          />

          <Accordion 
              header={<h1 className='regular'>¿Qué es un embudo de ventas?</h1>} 
              content={"Es el fundamento del marketing que explica el proceso de compra de un cliente, y que maneja cuatro aspectos: atracción, interacción, deseo y acción. "}
          />
          
          
        </section>

        {/* ========= NEWSLETTER ========== */}
        <section className='container container--small'>
          <h4 className='subheading text--align-center semi-bold'>Déjame tu e-mail si te interesa recibir tips semanales para potenciar tu negocio utilizando herramientas de branding, marketing y copywriting.</h4>
          <NewsletterForm />
        </section>

        {/* ========= CTA =========== */}
        <section id='contact' className='container container--small container--flex container--column container--center'>
          <h4 className='subheading text--align-center semi-bold'>Si quieres trabajar conmigo agendemos una reunión ahora mismo por el canal que prefieras.</h4>
          <CallToAction />
        </section>
      </main>
      
      <footer className='footer container--flex container--between'>
        <ul className='social container--flex'>
          {/* <li><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>BEHANCE</a></li> */}
          <li><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>LINKEDIN</a></li>
        </ul>
        <span>&copy; 2025</span>
      </footer>
    </div>
  )
}

export default Home