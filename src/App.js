import './App.css';
import { useEffect } from 'react';
import { initGA, logPageView } from "./components/Analytics";
import Home from './pages/Home';

function App() {

  useEffect(() => {
    initGA(); // Inicializa Google Analytics
    logPageView(); // Registra la primera vista de página
  }, []);

  return (
    <div className='app-container'>
      <div className='bg-noise'>
        <div className='wrapper'>
          <Home/>
        </div>               
      </div> 
    </div>  
  );
}

export default App;
