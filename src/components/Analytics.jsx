import ReactGA from "react-ga4";

// Iniciar Google Analytics con tu ID de medición
export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX"); // Reemplaza con tu ID real
};

// Registrar la vista de página
export const logPageView = () => {
  ReactGA.send("pageview");
};

// Registrar eventos personalizados
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
