import './App.css';
import AnimatedAppContainer from './components/AmimatedAppContainer'

function App() {
  return (
    <div className='app-container'>
      <div className='bg-noise'>               
        <div className='d-grid justify-content-center w-100'>
          <AnimatedAppContainer/>
        </div>
      </div> 
    </div>  
  );
}

export default App;
