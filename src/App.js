import './App.css';
import { useEffect, useState } from 'react';
import Intro from './pages/Intro';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1700)
  }, [])

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
