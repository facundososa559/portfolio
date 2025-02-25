import React from 'react'
import Button from '../components/Button'

function CallToAction({content1, content2}) {
  const handleEmailClick = () => {
    const email = "facundodelvalle559@gmail.com";
    const subject = "Consulta sobre servicios";
    const body = "Hola Facundo, quiero que me envíes los packs con los diferentes precios de tus servicios.";
  
    // Detectar si el usuario está en un dispositivo móvil
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    if (isMobile) {
      // En móviles, abrir la app de correo con mailto
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // En computadoras, abrir Gmail en una nueva pestaña
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    }
  };

  const handleWhatsAppClick = () => {
    const phone = "59892348907"; // Reemplaza con tu número sin el "+"
    const message = "Hola Facundo, quiero que me envíes los packs con los diferentes precios de tus servicios.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className='call-to-action container--flex container--wrap container--center'>
      <Button content={content1} onClick={handleEmailClick} />
      <Button content={content2} onClick={handleWhatsAppClick} />
    </div>
  );
}

export default CallToAction;
