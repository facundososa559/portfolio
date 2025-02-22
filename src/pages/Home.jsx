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
      <a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>LINKEDIN AQUÍ</a>
        <NavBar />  
      </div>
        {/* ======== HERO ========== */}
        <section className='hero container--small container--flex container--center'>
          <div className='hero__container container--flex container--column text--align-center'>
            <h1 className='text--small extra-light letter-spacing hero__subheading'>FACU DEL VALLE</h1>
            <h1 className='heading semi-bold'>Atrae visitas. Genera impacto. Transforma en clientes.</h1>
            <p>Construyo sitios web optimizados para vender productos y servicios. Dirige tu público al lugar donde vas a convertir visitas en clientes.</p>
            <p>Si necesitás más información, hacé click en cualquiera de las opciones de acá abajo, que te envío todos los detalles para empezar a construir tu proyecto.</p>
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
        <h4 className='subheading subheading--spaced-bottom semi-bold'>Preguntas Frecuentes</h4>
          <Accordion 
                header={<h1 className='regular'>¿Esto es un servicio de marketing o un servicio web?</h1>} 
                content={"Esto es un servicio completo, pero lo único que te cobro es el diseño y desarrollo de tu web teniendo en cuenta tu presupuesto. Me gusta darle a mis clientes herramientas de marketing y branding gratuitas necesarias para entender lo que están haciendo con su negocio y sacar el máximo provecho a este servicio."}
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

          {/* <Accordion 
              header={<h1 className='regular'>¿Qué es un embudo de ventas?</h1>} 
              content={"Es la herramienta de marketing que voy a utilizar para entender y potenciar tu negocio. Explica el proceso de compra de un cliente, y maneja cuatro aspectos fundamentales: atracción, interacción, deseo y acción."}
          /> */}
          
          <Accordion 
                header={<h1 className='regular'>¿Cuánto cuesta adquirir este servicio?</h1>} 
                content={"Depende del tipo de proyecto que estés buscando construir y del trabajo que eso conlleve. Una landing page simple puede costar entre unos U$D100 y U$D300, mientras que una tienda que ofrezca un catálogo de productos puede costar entre U$D300 y U$D600. De todas maneras, siempre analizo el tipo de proyecto y tengo en cuenta el presupuesto de mi cliente para hacer un trabajo más efectivo, por lo que estos precios pueden variar."}
          />
          
        </section>

        {/* ========= CTA =========== */}
        <section id='contact' className='container container--small container--flex container--column container--center'>
          <h4 className='subheading subheading--spaced-bottom text--align-center semi-bold'>¿Te interesa trabajar conmigo? Si hacés click en cualquiera de los botones de acá abajo te envío toda la información que necesites y empezamos a construir tu proyecto.</h4>
          <CallToAction />
        </section>

        {/* ========= NEWSLETTER ========== */}
        <section className='container container--small'>
          <h4 className='subheading subheading--spaced-bottom text--align-center semi-bold'>Para recibir tips semanales con herramientas de branding, marketing y copywriting, completa este formulario.</h4>
          <NewsletterForm />
        </section>

      </main>
      
      <footer className='footer container--flex container--between'>
        <ul className='social container--flex'>
          {/* <li><a href="https://www.linkedin.com/in/facundososa676/" target="_blank" rel='noreferrer'>BEHANCE</a></li> */}
          <li><a href="https://www.linkedin.com/in/facundodelvalle/" target="_blank" rel='noreferrer'>LINKEDIN AQUÍ</a></li>
        </ul>
        <span>&copy; 2025</span>
      </footer>
    </div>
  )
}

export default Home