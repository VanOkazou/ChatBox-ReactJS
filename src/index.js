// REACT
import React from 'react';
import { render } from 'react-dom';

// COMPOENENTS
import App from './components/app';
import Connexion from './components/connexion';
import NotFound from './components/notfound';

// ROUTER
import { BrowserRouter, Route } from 'react-router-dom';

// CSS
import './index.css';


const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ Connexion } />
                <Route exact path="/pseudo/:pseudo" component={ App } />
                <Route path="*" component={ NotFound } />
            </div>
        </BrowserRouter>
    )
}


render(
    <Root />,
    document.getElementById('root')
);