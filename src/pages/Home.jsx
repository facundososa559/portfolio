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
      <a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>LINKEDIN</a>
        <NavBar />  
      </div>
        {/* ======== HERO ========== */}
        <section className='hero container--small container--flex container--center'>
          <div className='hero__container container--flex container--column text--align-center'>
            <h1 className='text--small extra-light letter-spacing hero__subheading'>FACU DEL VALLE</h1>
            <h1 className='heading semi-bold'>Transformo visitas en clientes que generan dinero.</h1>
            <p>Dirijo tu tráfico a un sitio web optimizado para convertir clientes. Te ayudo a entender tu embudo de ventas y construyo el lugar donde vas a vender tus productos y servicios.</p>
            <p>Podemos agendar una reunión de 15 minutos donde te doy una consultoría gratis en la que te explico como mejorar tu proceso de ventas, y si te interesa, empezamos a construir tu proyecto.</p>
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
                header={<h1 className='regular'>¿Esto es un servicio de marketing o un servicio web?</h1>} 
                content={"Esto es un servicio completo. Lo único que te cobro es el diseño y desarrollo de tu web teniendo en cuenta tu presupuesto. Pero me gusta darle a mis clientes herramientas de marketing y branding gratuitas necesarias para entender lo que están haciendo con su negocio y sacar el máximo provecho a este servicio."}
          />
          <Accordion 
              header={<h1 className='regular'>¿Cómo es el proceso de creación y cómo vamos a trabajar?</h1>} 
              content={"Primero hago un diagnóstico donde evalúo el estado de tu negocio y con pequeños ajustes ya empiezo a mejorar tu propuesta. Planifico una estrategia acorde a tus objetivos y empiezo a construir tu sitio web optimizado para convertir tráfico en clientes. Subo tu web a internet y te asesoro sobre como sacarle el máximo partido."}
          />
          <Accordion 
              header={<h1 className='regular'>Una vez que terminamos el proyecto, ¿Cómo seguimos?</h1>} 
              content={"Voy a enseñarte estrategias para que puedas dirigir tráfico hacia ella. Vas a aprender a utilizar los datos arrojados para que puedas ajustar aún más tu propuesta y te voy a enseñar pasos simples para medir la conversión y encontrar puntos de mejora para seguir haciendo crecer tu negocio y tus resultados."}
          />
          <Accordion 
              header={<h1 className='regular'>¿Qué rol cumple este servicio en mi negocio?</h1>} 
              content={"Seguramente ya cuentes con tráfico generado a través de redes sociales o haciendo marketing tradicional. Con esta herramienta vas a poder dirigir ese tráfico a un lugar donde vas a medir el interés de esos clientes potenciales para transformarlos en clientes reales. También vas a aumentar la confianza en tus productos o servicios."}
          />

          <Accordion 
              header={<h1 className='regular'>¿Qué es un embudo de ventas?</h1>} 
              content={"Es la herramienta de marketing que voy a utilizar para entender y potenciar tu negocio. Explica el proceso de compra de un cliente, y maneja cuatro aspectos fundamentales: atracción, interacción, deseo y acción."}
          />
          
          
        </section>

        {/* ========= NEWSLETTER ========== */}
        <section className='container container--small'>
          <h4 className='subheading text--align-center semi-bold'>Déjame tu e-mail si te interesa recibir tips semanales con herramientas de branding, marketing y copywriting.</h4>
          <NewsletterForm />
        </section>

        {/* ========= CTA =========== */}
        <section id='contact' className='container container--small container--flex container--column container--center'>
          <h4 className='subheading text--align-center semi-bold'>Si te interesa trabajar conmigo agendemos una reunión por el canal que prefieras y coordinamos.</h4>
          <CallToAction />
        </section>
      </main>
      
      <footer className='footer container--flex container--between'>
        <ul className='social container--flex'>
          {/* <li><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>BEHANCE</a></li> */}
          <li><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>LINKEDIN AQUÍ</a></li>
        </ul>
        <span>&copy; 2025</span>
      </footer>
    </div>
  )
}

export default Home