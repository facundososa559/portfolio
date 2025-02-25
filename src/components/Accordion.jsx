import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import addIcon from "../assets/add-icon.svg"
import Button from './Button';

function Accordion({header, content, type, images = {}, alt, link}) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(images.desktop);

  /* Esto es para controlar la imagen que se muestra dependiendo del tamaño del viewport */
  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setCurrentImage(images.mobile);
      } else if (width < 768) {
        setCurrentImage(images.tablet);
      } else {
        setCurrentImage(images.desktop);
      }
    };

    updateImage(); // Ejecutar al inicio
    window.addEventListener("resize", updateImage); // Detectar cambios

    return () => window.removeEventListener("resize", updateImage);
  }, [images]); // Se ejecuta cuando cambian las imágenes

  /* Esto controla si se abre o se cierra el acordeón */
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className='accordion container--flex container--column border-solid--bottom'>
      <div onClick={toggleAccordion} className='accordion__header container--flex container--between container--center cursor--pointer'>
        {header}
        <motion.img 
          src={addIcon} 
          alt="add-icon.svg" 
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -135 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="accordion__body"
      >
       {type === "image" && currentImage && (
            <a href={link} target="_blank" rel="noopener noreferrer" className='accordion__body--link'>
              <motion.img
                src={currentImage}
                alt={currentImage}
                initial={{ scale: 1.05 }}
                animate={{ scale: isOpen ? 1 : 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="accordion__body--img"
              />

              <div className='accordion__button-container container--flex container--center container--fill-x'><Button content="Ver diseño para pc en otra pestaña" onClick={() => window.open(link, "_blank")} /></div>
            </a>
          )}
        
         
          {type !== "image" && (
            <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="accordion__body--text"
          >
            <p>{content}</p>
          </motion.div>
        )}
        
      </motion.div>
      
    </div>
  )
}

export default Accordion
