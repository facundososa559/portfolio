import { useLocation } from 'react-router-dom';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedApp from './components/AnimatedApp';
import Header from './components/Header'

function App() {
  const location = useLocation()

  return (
    <div className='d-grid justify-content-center w-100'>
      <TransitionGroup className='wrapper p-3'>
        <Header/>
        <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
          <AnimatedApp location={location}/>
        </CSSTransition>
      </TransitionGroup> 
    </div>
      
  );
}

export default App;
