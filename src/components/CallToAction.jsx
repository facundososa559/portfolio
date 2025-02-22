import React from 'react'
import Button from '../components/Button'

function CallToAction() {
  const handleEmailClick = () => {
    const email = "facundodelvalle559@gmail.com";
    const subject = "Consulta sobre servicios";
    const body = "Hola, me gustaría obtener más información sobre tus servicios.";
  
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
    const message = "Hola, me interesa conocer más sobre tus servicios.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className='call-to-action container--flex container--wrap container--center'>
      <Button content="Quiero recibir información vía e-mail" onClick={handleEmailClick} />
      <Button content="Quiero recibir información vía whatsapp" onClick={handleWhatsAppClick} />
    </div>
  );
}

export default CallToAction;
