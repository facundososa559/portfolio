import './App.css';
import AnimatedAppContainer from './components/AmimatedAppContainer'
import { useEffect, useState } from 'react';
import Intro from './components/Intro';

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
        <div className='d-grid justify-content-center w-100'>
          {loading ? <Intro/> : <AnimatedAppContainer/>}
        </div>
      </div> 
    </div>  
  );
}

export default App;
