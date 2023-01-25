import { useLocation } from 'react-router-dom';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedApp from './components/AnimatedApp';
import Header from './components/Header'

function App() {
  const location = useLocation()

  return (
    <div className='app-container'>
      <div className='bg-noise'>               
        <div className='d-grid justify-content-center w-100'>
          <TransitionGroup className='wrapper p-3 position-relative'>
            <Header/>
            <CSSTransition key={location.pathname} classNames="fade" timeout={1200}>
              <AnimatedApp location={location}/>
            </CSSTransition>
          </TransitionGroup> 
        </div>
      </div> 
    </div>
      
  );
}

export default App;
