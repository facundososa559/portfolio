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
            <h1 className='heading semi-bold'>Construyo sitios web que aumentan el valor de tu negocio.</h1>
            <p>Diseño, desarrollo y optimizo sitios web para que tus clientes tengan la oportunidad de conocer y adquirir tus productos o servicios, de manera rápida, directa y efectiva.</p>
            <p>Para conocer los precios de las ofertas que se adaptan a tu negocio, haz clic en cualquiera de las opciones de acá abajo, que te envío detallado en diferentes paquetes cómo puedo ayudarte.</p>
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
              header={<h1 className='regular'>¿Qué rol cumple este servicio en mi negocio?</h1>} 
              content={"Seguramente ya generaste visitas a tu negocio a través de redes sociales o haciendo marketing tradicional. Con esta nueva herramienta vas a poder dirigir esas visitas a un lugar donde vas a aumentar la confianza y el valor de tus productos o servicios, para que esas visitas se transformen en clientes o en ventas."}
          />

          <Accordion 
                header={<h1 className='regular'>¿Esto es un servicio completo o solo un servicio web?</h1>} 
                content={"Esto es un servicio completo, pero lo único que te cobro es el diseño y desarrollo de tu web teniendo en cuenta tu presupuesto. Me gusta darle a mis clientes herramientas de marketing y branding gratuitas necesarias para entender lo que están haciendo con su negocio y sacar el máximo provecho a este servicio."}
          />
          
          <Accordion 
              header={<h1 className='regular'>¿Cómo es el proceso de creación y cómo vamos a trabajar?</h1>} 
              content={"Evalúo el estado de tu negocio y planifico una estrategia acorde a tus objetivos para empezar a construir un sitio web optimizado que convierte tráfico en clientes. Subo tu web a internet y luego te asesoro sobre como sacarle el máximo partido a esta herramienta."}
          />
          <Accordion 
              header={<h1 className='regular'>Una vez que terminamos el proyecto, ¿Cómo seguimos?</h1>} 
              content={"Voy a enseñarte estrategias para que puedas dirigir personas hacia ella. Vas a aprender a utilizar los datos arrojados para que puedas ajustar aún más tu propuesta y te voy a enseñar pasos simples para medir la conversión y encontrar puntos de mejora en tu negocio que te van a permitir seguir creciendo y aumentar aun más tus resultados."}
          />

          <Accordion 
              header={<h1 className='regular'>¿Qué es un embudo de ventas?</h1>} 
              content={"Es la herramienta de marketing que voy a utilizar para entender y potenciar tu negocio. Explica el proceso de compra de un cliente, y maneja cuatro aspectos fundamentales: atracción, interacción, deseo y acción."}
          />
          
          {/* <Accordion 
                header={<h1 className='regular'>¿Cuánto cuesta adquirir este servicio?</h1>} 
                content={"Depende del tipo de proyecto que estés buscando construir y del trabajo que eso conlleve. Una landing page simple puede costar entre unos U$D100 y U$D300, mientras que una tienda que ofrezca un catálogo de productos puede costar entre U$D300 y U$D600. De todas maneras, siempre analizo el tipo de proyecto y tengo en cuenta el presupuesto de mi cliente para hacer un trabajo más efectivo, por lo que estos precios pueden variar."}
          /> */}
          
        </section>

        {/* ========= CTA =========== */}
        <section id='contact' className='container container--small container--flex container--column container--center'>
          <h4 className='subheading subheading--spaced-bottom text--align-center semi-bold'>¿Te interesa trabajar conmigo? Si haces click en cualquiera de los botones de acá abajo, te envío toda la información que necesites y empezamos a construir tu proyecto.</h4>
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