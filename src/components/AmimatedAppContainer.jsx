import React from 'react'
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedApp from '../components/AnimatedApp';
import Header from '../components/Header'

function AmimatedAppContainer() {
    const location = useLocation()

    return (
        <TransitionGroup className='wrapper p-3 position-relative'>
            <Header />
            <CSSTransition key={location.pathname} classNames="fade" timeout={1200}>
                <AnimatedApp location={location}/>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AmimatedAppContainer